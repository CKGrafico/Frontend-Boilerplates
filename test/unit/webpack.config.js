const path = require('path');
const root = path.resolve(__dirname, '../../');

module.exports = {
  optimization: {
    minimize: false
  },
  resolve: {
    modules: [root + '/node_modules'],
    extensions: ['.js', '.vue', '.ts'],
    alias: {
      '~': path.resolve(root, 'client'),
      '~store': path.resolve(root, '.nuxt/store'),
      '~router': path.resolve(root, '.nuxt/router'),
      'test': path.resolve(root, 'test'),
    },
  },
  module: {
    rules: [
      {
        test: /((client|server)\.js)|(\.tsx?)$/,
        loader: 'ts-loader',
        options: {
          appendTsSuffixTo: [/\.vue$/]
        },
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.(png|jpe?g|gif|svg|webp)$/,
        use: {
          loader: 'url-loader',
        }
      },
      {
        test: /\.vue$/,
        exclude: /node_modules/,
        loader: 'vue-loader',
      }
    ]
  }
};
