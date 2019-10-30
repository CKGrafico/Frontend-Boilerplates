const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const sassResourcesLoader = require('craco-sass-resources-loader');
const CSS_MODULE_LOCAL_IDENT_NAME = '[local]___[hash:base64:5]';

module.exports = {
  plugins: [
    {
      plugin: sassResourcesLoader,
      options: {
        resources: './src/styles/base/_variables.scss'
      }
    }
  ],
  webpack: {
    alias: {
      '~': `${path.resolve(__dirname)}/src`
    },
    configure: webpackConfig => {
      webpackConfig.optimization.minimizer = [
        new TerserPlugin({
          terserOptions: {
            keep_classnames: true,
            keep_fnames: true
          }
        })
      ];

      return webpackConfig;
    }
  },
  jest: {
    configure: {
      moduleNameMapper: {
        '^~(.*)$': '<rootDir>/src$1'
      },
      moduleFileExtensions: ['js', 'jsx', 'json', 'ts', 'tsx'],
      transform: {
        '.+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
        '^.+\\.tsx?$': 'ts-jest'
      },
      transformIgnorePatterns: ['/node_modules/'],
      testMatch: ['**/**/*.test.(js|jsx|ts|tsx)|**/tests/unit/specs/*.(js|jsx|ts|tsx)'],
      testURL: 'http://localhost/',
      globals: {
        'ts-jest': {
          babelConfig: true
        }
      },
      setupFiles: ['./tests/unit/jest.setup.js']
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
      cacheDirectory: false
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
};
