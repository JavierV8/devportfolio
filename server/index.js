const express = require('express');
const next = require('next');
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const routes = require('../routes');
const handle = routes.getRequestHandler(app);
const server = express();
const cors = require('cors');

server.use(cors());
server.options('*', cors());

require('./startup/logging')();
require('./startup/routes')(server);
require('./startup/db')();
require('./startup/config')();
require('./startup/validation')();
require('./startup/prod')(server);

app.prepare()
    .then(() => {
        server.get('*', (req, res) => {
            return handle(req, res);
        });
        const PORT = process.env.PORT || 4000;
        server.use(handle).listen(PORT, (err) => {
            if (err) throw err;
            console.log('> Ready on port ' + PORT);
        })
    })
    .catch((ex) => {
        console.error(ex.stack)
        process.exit(1)
    })