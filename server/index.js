const express = require('express');
const next = require('next');
const routes = require('../components/routes');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = routes.getRequestHandler(app);

app.prepare().then(() => {
    const server = express();
    var cors = require('cors');
    server.use(cors());
    server.options('*', cors());

    require('./startup/logging')();
    require('./startup/routes')(server);
    require('./startup/db')();
    require('./startup/config')();
    require('./startup/validation')();
    require('./startup/prod')(server);

    server.get('*', (req, res) => {
      return handle(req, res)
    });
    const PORT = process.env.PORT || 3000;
    server.use(handle).listen(PORT, (err) => {
      if (err) throw err;
      console.log('> Ready on port ' + PORT);
    })
}).catch((ex) => {
    console.error(ex.stack)
    process.exit(1)
})