const path = require('path');
const files = path.resolve(__dirname, '../../client/**/*.spec.ts');
const vendor = path.resolve(__dirname, './karma.vendor.ts');

module.exports = (config, webpack) => {
  webpack.optimization = {};

  config.set({
    browsers: ['Chrome'],
    frameworks: ['mocha', 'sinon-chai'],

    files: [
      { pattern: vendor, watched: false },
      { pattern: files, watched: false },
    ],
    preprocessors: {
      [vendor]: [ 'webpack' ],
      [files]: [ 'webpack' ],
    },

    reporters: ['spec'],

    mime: {
      'text/x-typescript': ['ts']
    },

    webpack,
    webpackMiddleware: {
      stats: 'errors-only' // 'normal'
    }
  })
}
