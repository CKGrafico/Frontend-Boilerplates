const webpack = require('webpack')
const { paths, environments } = require('./tasks/config/options');
const _ = require('./tasks/config/helpers');

let rules = require('require.all')('./tasks/rules');

const PRODUCTION = JSON.stringify(environments.production);
const DEVELOPMENT = JSON.stringify(environments.development);
const LOCAL = JSON.stringify(environments.local);

module.exports = env => {
    rules((name, rule) => rule(env.NODE_ENV, environments));
    env.NODE_ENV = JSON.stringify(env.NODE_ENV);

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
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: [
                        {
                            loader: 'babel-loader'
                        }
                    ]
                }
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
        devtool: (() => env.NODE_ENV === PRODUCTION ? false : 'inline-source-map')()
    })
};