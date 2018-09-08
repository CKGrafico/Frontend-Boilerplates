const webpackConfig = require('../../webpack.config')({ NODE_ENV: 'development' });

webpackConfig.optimization = {};

const files = '../../src/**/*.spec.ts'
const vendor = './karma.vendor.ts'

module.exports = (config) => {
  config.set({
    browsers: ['ChromeHeadless'],
    frameworks: ['mocha', 'sinon-chai'],

    files: [
      { pattern: vendor, watched: false },
      { pattern: files, watched: false },
    ],
    preprocessors: {
      [vendor]: [ 'webpack' ],
      [files]: [ 'webpack' ],
    },

    mime: {
      'text/x-typescript': ['ts']
    },

    webpack: webpackConfig,
    webpackMiddleware: {
      stats: 'errors-only' // 'normal'
    }
  })
}