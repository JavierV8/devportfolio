const routes = require('next-routes');

module.exports = routes()
    .add('blog', 'blog/:id')
    .add('portafolioNew', '/portfolios/new')
    .add('portfolio', '/portfolio/:id')
    .add('portfolioEdit', '/portfolios/:id/edit')