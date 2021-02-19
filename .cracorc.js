const path = require('path');
const glob = require('glob');
const TerserPlugin = require('terser-webpack-plugin');
const PurgecssPlugin = require('purgecss-webpack-plugin');
const CSS_MODULE_LOCAL_IDENT_NAME = '[local]___[hash:base64:5]';
const styleFunctions = require('./src/styles/functions/index.js');

module.exports = {
  webpack: {
    alias: {
      '~': `${path.resolve(__dirname)}/src`
    },
    configure: (webpackConfig) => {
      // webpackConfig.optimization.minimizer = [
      //   new TerserPlugin({
      //     terserOptions: {
      //       keep_classnames: true,
      //       keep_fnames: true
      //     }
      //   })
      // ];

      return webpackConfig;
    },
    plugins: [
      new PurgecssPlugin({
        paths: () => glob.sync('./src/**/*.tsx', { nodir: true })
      })
    ]
  },
  jest: {
    configure: {
      moduleNameMapper: {
        '^~(.*)$': '<rootDir>/src$1'
      },
      moduleFileExtensions: ['js', 'jsx', 'json', 'ts', 'tsx'],
      transform: {
        '.+\\.(css|svg|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
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
    },
    postcss: {
      plugins: [
        require('postcss-import'),
        require('postcss-at-rules-variables')({ atRules: ['each', 'mixin', 'media'] }),
        require('postcss-simple-vars'),
        require('postcss-replace')({ pattern: /##/g, data: { replaceAll: '$' } }),
        require('postcss-mixins'),
        require('postcss-functions')({ functions: styleFunctions }),
        require('postcss-each'),
        require('postcss-calc'),
        require('postcss-fontpath'),
        require('postcss-nested'),
        require('autoprefixer'),
        require('postcss-discard-comments')
      ]
    }
  },
  babel: {
    loaderOptions: {
      cacheDirectory: false
    },
    plugins: []
  }
};
