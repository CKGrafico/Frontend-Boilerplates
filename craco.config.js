const path = require('path');
const CSS_MODULE_LOCAL_IDENT_NAME = '[local]___[hash:base64:5]';

module.exports = {
  webpack: {
    alias: {
      '~': `${path.resolve(__dirname)}/src`
    }
  },
  jest: {
    configure: {
      moduleNameMapper: {
        '^~(.*)$': '<rootDir>/src$1'
      }
    }
  },
  style: {
    modules: {
      camelCase: true,
      localIdentName: CSS_MODULE_LOCAL_IDENT_NAME
    }
  },
  babel: {
    loaderOptions: {
      cacheDirectory: false,
    },
    plugins: [
      [
        'babel-plugin-react-css-modules',
        {
          attributeNames: {
            activeStyleName: 'activeClassName'
          },
          filetypes: {
            '.scss': {
              syntax: 'postcss-scss',
              plugins: ['postcss-nested']
            }
          },
          generateScopedName: CSS_MODULE_LOCAL_IDENT_NAME,
          handleMissingStyleName: 'warn'
        }
      ]
    ]
  }
}
