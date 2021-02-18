const MiniCSSExtractPlugin = require('mini-css-extract-plugin');

const styleFunctions = require('../../src/styles/functions/index.js');

module.exports = (env) => {
  const styleLoaders = {
    production: MiniCSSExtractPlugin.loader,
    development: 'style-loader'
  };

  return {
    test: /\.css$/,
    exclude: /node_modules/,
    use: [
      {
        loader: styleLoaders[env] // Creates style nodes from JS strings
      },
      {
        loader: 'css-loader' // Translates CSS into CommonJS
      },
      {
        loader: 'postcss-loader', // More CSS Plugins
        options: {
          postcssOptions: {
            plugins: [
              require('postcss-import'),
              require('postcss-at-rules-variables'),
              require('postcss-css-variables')({
                preserve: true
              }),
              require('postcss-mixins'),
              require('postcss-functions')({ functions: styleFunctions }),
              require('postcss-each'),
              require('postcss-calc'),
              require('postcss-nested'),
              require('postcss-fontpath'),
              require('autoprefixer'),
              require('postcss-discard-comments')
            ]
          }
        }
      }
    ]
  };
};
