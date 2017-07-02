const webpack = require('webpack')
const paths = require('./tasks/config/paths');
const _ = require('./tasks/config/helpers');

const PRODUCTION = 'production';

module.exports = env => ({
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
            {
                test: /\.ts$/,
                enforce: 'pre',
                loader: 'tslint-loader',
                options: {
                    configFile: 'tslint.json',
                    fix: false  // this will fix simple errors 
                }
            },
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
    devtool: (() => env && env.NODE_ENV.includes(PRODUCTION) ? false : 'inline-source-map')()
});