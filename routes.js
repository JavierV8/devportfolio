const routes = require('next-routes');

module.exports = routes()
    .add('portafolioNew', '/portfolios/new')
    .add('portfolio', '/portfolio/:id')
    .add('portfolioEdit', '/portfolios/:id/edit')