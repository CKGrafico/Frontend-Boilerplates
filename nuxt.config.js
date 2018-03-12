// Info about configuration https://nuxtjs.org/guide/configuration/
const webpack = require('webpack');
const path = require('path');
const { paths, environments } = require('./tasks/config/options');
const _ = require('./tasks/config/helpers');

let rules = require('require.all')('./tasks/rules');

let environment = process.env.NODE_ENV;
process.env.NODE_ENV = JSON.stringify(environment);

rules((name, rule) => rule(environment, environments));

// Define global plugins
let plugins = [

];

// Add non-test environment plugins
const testPlugins = [
    new webpack.DefinePlugin({
        'global': {}
    }),
];

if (environment !== environments.test) {
    plugins = [...plugins, ...testPlugins];
}

module.exports = {
    env: environment,
    head: {
        title: 'My app',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        ]
    },
    loading: { color: '#1FC2C8' },
    srcDir: './app',
    build: {
        extractCSS: true,
        vendor: ['babel-polyfill', 'vuex-class', 'nuxt-class-component', 'vue-i18n'],
        module: {
            rules: [
                rules.scriptsLint,
                rules.scripts,
                rules.scriptsVue,
                rules.css,
                rules.html
            ]
        },
        plugins: []
    },
    router: {
        middleware: 'i18n'
    },
    plugins: ['~/plugins/i18n.js'],
    modules: [
        '~/modules/typescript',
        '@nuxtjs/axios'
    ]
}
