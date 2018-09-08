webpackConfig = require('../../webpack.config')({ NODE_ENV: 'development' });

webpackConfig.optimization = {};

const pattern = './specs/**/*.spec.ts'
// const pattern = '../../src/**/*.spec.ts'

module.exports = (config) => {
  config.set({
    browsers: ['PhantomJS'],
    frameworks: ['mocha', 'sinon-chai', 'phantomjs-shim'],

    files: [{ pattern, watched: false }],

    mime: {
      'text/x-typescript': ['ts','tsx']
    },

    preprocessors: {
      // add webpack as preprocessor
      [pattern]: [ 'webpack' ]
    },

    webpack: webpackConfig,

    webpackMiddleware: {
      stats: 'errors-only' // 'normal'
    }
  })
}