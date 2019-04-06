const path = require('path');

module.exports = {
  lintOnSave: false,
  configureWebpack: {
    plugins: [],
    resolve: {
      alias: {
          'styles': path.join(__dirname, 'src/styles'),
          'assets': path.join(__dirname, 'src/assets'),
          '~': path.join(__dirname, 'src')
      }
    }
  }
}