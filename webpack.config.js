const webpack = require('webpack')
const { paths, environments } = require('./tasks/config/options');
const _ = require('./tasks/config/helpers');

let rules = require('require.all')('./tasks/rules');

module.exports = env => {
    let environment = env.NODE_ENV;
    env.NODE_ENV = JSON.stringify(environment);

    rules((name, rule) => rule(environment, environments));

    return ({
        entry: {
            app: _.files(paths.app.scripts.app),
            vendor: _.files(paths.app.scripts.vendor)
        },
        output: {
            path: _.abs(_.folder(paths.dist.scripts), __dirname),
            filename: '[name].js'
        },
        module: {
            rules: [
                rules.scriptsLint,
                rules.scripts
            ]
        },
        plugins: [
            new webpack.ProvidePlugin({
                $: 'jquery',
                jQuery: 'jquery',
                'window.jQuery': 'jquery',
                'window.$': 'jquery'
            }),
            // extract vendor as a separate bundle
            new webpack.optimize.CommonsChunkPlugin({ name: 'vendor', filename: 'vendor.js' }),
        ],
        devtool: (() => environment === environments.production ? false : 'inline-source-map')()
    })
};