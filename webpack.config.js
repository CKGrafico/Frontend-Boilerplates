const webpack = require('webpack');
const path = require('path');
const { paths, environments } = require('./tasks/config/options');
const _ = require('./tasks/config/helpers');

const VueLoaderPlugin = require('vue-loader/lib/plugin');
var VueBuilder = require('vue-builder-webpack-plugin');

let rules = require('require.all')('./tasks/rules');
let plugins = require('require.all')('./tasks/plugins');

module.exports = env => {
    let environment = env.NODE_ENV;
    env.NODE_ENV = JSON.stringify(environment);

    console.log(path.resolve(__dirname, _.folder(paths.app.styles) + '/base'));

    const config = {};

    rules((name, rule) => rule(environment, environments, config));
    plugins((name, rule) => rule(environment, environments, config));

    return ({
        mode: 'development',
        entry: {
            app: _.files(paths.app.scripts.app),
            vendor: _.files(paths.app.scripts.vendor),
        },
        output: {
            path: path.resolve(__dirname, _.folder(paths.dist.scripts)),
            filename: '[name].js',
            publicPath: '/scripts/'
        },
        module: {
            rules: [
                // rules.lint,
                ...rules.components,
                rules.scripts,
            ]
        },
        plugins: [
            // plugins.globals,
            // plugins.hello(rules.separatedVueFiles),
            // plugins.uglify
            new VueBuilder({
                path: 'app'
              }),
              new VueLoaderPlugin()
        ],
        resolve: {
            extensions: ['.ts', '.js', '.vue', '.vue.ts'],
            modules: [
                path.resolve(__dirname, _.folder(paths.dist.styles)),
                'node_modules'
            ],
            alias: {
                'styles': path.resolve(__dirname, _.folder(paths.app.styles) + '/base'),
                '~': path.resolve(__dirname, _.folder(paths.app.scripts)),
                'vue$': 'vue/dist/vue.runtime.common.js'
            }
        },
        devtool: (() => environment === environments.production ? false : 'inline-source-map')(),
        ...config
    })
};