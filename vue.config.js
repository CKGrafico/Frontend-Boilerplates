const path = require('path');

module.exports = {
  lintOnSave: false,
  css: {
    loaderOptions: {
      sass: {
        data: `@import "~@/styles/base/_variables.scss";`
      }
    }
  },
  configureWebpack: {
    plugins: [],
    resolve: {
      alias: {
        'styles': path.join(__dirname, 'src/styles'),
        'assets': path.join(__dirname, 'src/assets'),
        '~': path.join(__dirname, 'src/app')
      }
    }
  }
}