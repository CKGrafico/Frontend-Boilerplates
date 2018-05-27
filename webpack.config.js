const webpack = require('webpack');
const path = require('path');
const { paths, environments } = require('./tasks/config/options');
const _ = require('./tasks/config/helpers');

let rules = require('require.all')('./tasks/rules');
let plugins = require('require.all')('./tasks/plugins');

module.exports = env => {
    let environment = env.NODE_ENV;
    env.NODE_ENV = JSON.stringify(environment);

    const config = {};

    rules((name, rule) => rule(environment, environments, config));
    plugins((name, rule) => rule(environment, environments, config));

    return ({
        entry: {
            app: _.files(paths.app.scripts.app),
            vendor: _.files(paths.app.scripts.vendor)
        },
        output: {
            path: path.resolve(__dirname, _.folder(paths.dist.scripts)),
            filename: '[name].js',
            publicPath: '/scripts/'
        },
        module: {
            rules: [
                rules.scriptsLint,
                rules.scripts,
                rules.separatedFiles,
                rules.componentsName,
                rules.scriptsVue
            ]
        },
        plugins: [
            plugins.globals,
            plugins.commons,
            plugins.uglify
        ],
        resolve: {
            extensions: ['.ts', '.js', '.vue'],
            modules: [
                path.resolve(__dirname, _.folder(paths.dist.css.scripts)),
                'node_modules'
            ],
            alias: {
                '~': path.resolve(__dirname, _.folder(paths.app.scripts)),
                'vue$': 'vue/dist/vue.runtime.common.js'
            }
        },
        devtool: (() => environment === environments.production ? false : 'inline-source-map')(),
        ...config
    })
};