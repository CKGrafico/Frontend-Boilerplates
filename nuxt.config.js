// Info about configuration https://nuxtjs.org/guide/configuration/
const webpack = require('webpack');
const path = require('path');
const { paths, environments } = require('./tasks/config/options');
const _ = require('./tasks/config/helpers');

let rules = require('require.all')('./tasks/rules');

const environment = process.env.NODE_ENV;
rules((name, rule) => rule(environment, environments));

const vendor = [
    'babel-polyfill',
    'reflect-metadata', 
    'inversify',
    'vue-perfect-scrollbar'];

const plugins = [
    '~/plugins/inversify',
    '~/plugins/axios',
    '~/plugins/filters',
    { src: '~/plugins/components', ssr: false }
];

const modules = [
    '@nuxtjs/axios',
    '@nuxtjs/bootstrap-vue',
    '~/modules/typescript',
    '~/modules/separated-files',
    '~/modules/components-name',
    '~/modules/i18n-json'
];

module.exports = {
    env: environment,
    head: {
        title: 'My App',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        ]
    },
    loading: { color: '#1ABC9C' },
    plugins,
    modules,
    router: {
        middleware: ['settings'],
        linkActiveClass: 'is-active'
    },
    languages: {
        locales: ['es', 'en'],
        defaultLocale: 'en'
    },
    build: {
        extractCSS: true,
        vendor,
        extend(config) {
            const customRules = [
                rules.scriptsLint
            ];

            config.module.rules = [...config.module.rules, ...customRules];
        },
        plugins: []
    },
    axios: {
        baseURL: process.env.BASE_URL || '/'
    },
    srcDir: './app',
    buildDir: './.temp/.nuxt',
    css: ['./.temp/css/styles/app.css'],
    generate: {
        dir: 'dist'
    }
}
