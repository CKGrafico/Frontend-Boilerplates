const webpack = require('webpack');
const path = require('path');
const { paths, environments } = require('./tasks/config/options');
const _ = require('./tasks/config/helpers');

let rules = require('require.all')('./tasks/rules');
let plugins = require('require.all')('./tasks/plugins');

module.exports = env => {
    let environment = env.NODE_ENV;
    env.NODE_ENV = JSON.stringify(environment);

    rules((name, rule) => rule(environment, environments));
    plugins((name, rule) => rule(environment, environments));

    return ({
        entry: {
            app: _.files(paths.app.scripts.app),
            vendor: _.files(paths.app.scripts.vendor)
        },
        output: {
            path: path.resolve(__dirname, _.folder(paths.dist.scripts)),
            filename: '[name].js'
        },
        module: {
            rules: [
                rules.scriptsLint,
                rules.scripts
            ]
        },
        plugins: [
            plugins.globals,
            plugins.commons,
            plugins.uglify
        ],
        devtool: (() => environment === environments.production ? false : 'inline-source-map')()
    })
};