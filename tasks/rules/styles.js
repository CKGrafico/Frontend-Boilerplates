const MiniCSSExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env) => {
  const styleLoaders = {
    production: MiniCSSExtractPlugin.loader,
    development: 'style-loader'
  };

  return {
    test: /\.scss$/,
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
          plugins: () => [require('autoprefixer')]
        }
      },
      {
        loader: 'sass-loader', // Compiles Sass to CSS, using Node Sass by default
        options: {
          //includePaths: ['absolute/path/a']
        }
      }
    ]
  };
};
