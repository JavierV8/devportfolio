const withSass = require('@zeit/next-sass');
const withCSS = require('@zeit/next-css');


module.exports = withCSS(withSass({
  webpack(config, options) {
    config.module.rules.push({
      test: /\.(html)$/,
      use: [
        options.defaultLoaders.babel,
        {
          loader: 'html-loader',
          options: {
            attrs: [':data-src']
          }
        }
      ]

    })
    return config
  },
}));