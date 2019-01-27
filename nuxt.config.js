const path = require('path');
const pkg = require('./package');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const plugins = [
  '~/plugins/polyfills'
];

const middleware = [
  'config',
  'interceptors'
];

const modules = [
  ['bootstrap-vue/nuxt', { css: false }],
  '~/modules/file-loader',
  '~/modules/typescript',
  '~/modules/typescript-lint',
  '~/modules/i18n-json',

  ['nuxt-sass-resources-loader', '~/assets/styles/shared.scss']
];

const postcss = {
  // plugins: {
  //   stylelint: {
  //     failAfterError: false,
  //     syntax: 'scss',
  //     reporters: [
  //       { formatter: 'string', console: true }
  //     ]
  //   }
  // },
  preset: {
    autoprefixer: {
      browsers: ['last 2 versions']
    }
  }
};

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  loading: { color: '#C3EAE0' },

  languages: {
    locales: ['es', 'en'],
    defaultLocale: 'en'
  },

  css: ['~/assets/styles/app.scss'],

  router: {
    middleware
  },

  plugins,
  modules,
  srcDir: './client',
  buildDir: './.temp/.nuxt',

  build: {
    extractCSS: true,
    postcss,
    optimization: {
      minimizer: [
        new UglifyJSPlugin({
          uglifyOptions: {
            keep_classnames: true,
            keep_fnames: true,
          }
        })
      ],
      splitChunks: {
        cacheGroups: {
          vendor: {
            chunks: 'all',
            test: path.resolve(__dirname, 'node_modules'),
            name: 'vendor',
            enforce: true,
          },
        },
      },
    },
    extend(config, ctx) {
      config.resolve.alias['test'] = path.resolve(__dirname, './test');
    }
  }
}
