webpackConfig = require('../../webpack.config')({ NODE_ENV: 'development' });

module.exports = (config) => {
  config.set({
    browsers: ['PhantomJS'],
    frameworks: ['mocha', 'sinon-chai'],
    // ... normal karma configuration
    files: [
      // all files ending in "_test"
      { pattern: 'specs/*_test.js', watched: false },
      { pattern: 'specs/**/*_test.js', watched: false }
      // each file acts as entry point for the webpack configuration
    ],

    preprocessors: {
      // add webpack as preprocessor
      'specs/*_test.js': [ 'webpack' ],
      'specs/**/*_test.js': [ 'webpack' ]
    },

    webpack: webpackConfig,

    webpackMiddleware: {
      // webpack-dev-middleware configuration
      // i. e.
      stats: 'errors-only'
    }
  })
}