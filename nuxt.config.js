// Info about configuration https://nuxtjs.org/guide/configuration/
const StyleLintPlugin = require('stylelint-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
//const env = require(`./environments/${process.env.NODE_ENV}`);

console.log(`Environment: ${process.env.NODE_ENV}`);

module.exports = {
    //env: env,
    head: {
        title: 'PWABuilder',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        ]
    },
    loading: { color: '#1FC2C8' },
    css: ['~/assets/scss/app.scss'],
    build: {
        extractCSS: true,
        vendor: ['babel-polyfill', 'vuex-class', 'nuxt-class-component', 'vue-i18n'],
        plugins: [
            new StyleLintPlugin({
                files: ['**/*.scss', '**/*.vue'],
                failOnError: false,
                syntax: 'scss'
            }),
            new ForkTsCheckerWebpackPlugin({
              tslint: true,
              vue: true
            })
        ]
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
