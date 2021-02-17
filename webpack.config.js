const path = require('path');
const rules = require('require.all')('./tasks/rules');
const plugins = require('require.all')('./tasks/plugins');

module.exports = (options) => {
  const environment = options.WEBPACK_BUNDLE ? 'production' : 'development';

  rules((name, rule) => rule(environment));
  plugins((name, rule) => rule(environment));

  return {
    mode: environment,
    entry: {
      app: path.resolve(__dirname, 'app/scripts/app.js'),
      styles: path.resolve(__dirname, 'app/styles/app.scss')
    },
    output: {
      filename: '[name].js'
    },
    module: {
      rules: [...rules.files, rules.scripts, rules.styles]
    },
    plugins: [plugins.html, plugins.images, plugins.extractStyles],
    devServer: {
      open: true,
      port: 4000,
      https: false,
      hot: true,
      historyApiFallback: true,
      watchOptions: {
        poll: true
      }
      // proxy: { '/api': 'http://localhost:3000' }
    },
    optimization: {
      minimizer: [plugins.uglify],
      splitChunks: {
        cacheGroups: {
          vendor: {
            chunks: 'all',
            test: path.resolve(__dirname, 'node_modules'),
            name: 'vendor',
            enforce: true
          }
        }
      }
    },
    resolve: {
      alias: {
        styles: path.resolve(__dirname, 'app/styles'),
        assets: path.resolve(__dirname, 'app/assets'),
        '~': path.resolve(__dirname, 'app/scripts')
      }
    }
  };
};
