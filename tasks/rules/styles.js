const MiniCSSExtractPlugin = require('mini-css-extract-plugin');

const stylePostFunctions = require("../../src/styles/functions/post-functions.js");
const stylePreFunctions = require("../../src/styles/functions/pre-functions.js");

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
              require('postcss-functions')({ functions: stylePreFunctions }),
              require('postcss-at-rules-variables')({ atRules: ['each', 'mixin', 'media'] }),
              require('postcss-simple-vars'),
              require('postcss-replace')({ pattern: /##/g, data: { replaceAll: '$' } }),
              require('postcss-mixins'),
              require('postcss-functions')({ functions: stylePostFunctions }),
              require('postcss-each'),
              require('postcss-calc'),
              require('postcss-hexrgba'),
              require('postcss-fontpath'),
              require('postcss-nested'),
              require('autoprefixer'),
              require('postcss-discard-comments')
            ]
          }
        }
      }
    ]
  };
};
