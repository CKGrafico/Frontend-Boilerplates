const path = require('path');
const { paths, environments } = require('./tasks/config/options');
const _ = require('./tasks/config/helpers');

let rules = require('require.all')('./tasks/webpack/rules');
let plugins = require('require.all')('./tasks/webpack/plugins');

module.exports = env => {
    const config = {};
    let environment = env.NODE_ENV;
    env.NODE_ENV = JSON.stringify(environment);

    rules((name, rule) => rule(environment, environments, config));
    plugins((name, rule) => rule(environment, environments, config));

    return ({
        mode: environment,
        entry: {
            app: _.files(paths.src.app.main),
        },
        output: {
            path: path.resolve(__dirname, _.folder(paths.dist.scripts)),
            filename: '[name].js',
            publicPath: '/scripts/'
        },
        module: {
            rules: [
                rules.scripts,
                rules.lint
            ]
        },
        plugins: [
            plugins.globals,
        ],
        devServer: {
            contentBase: path.resolve(__dirname, _.folder(paths.dist)),
            open: true,
            port: 4000,
            https: false,
            watchOptions: {
                poll: true
            }
            // proxy: { '/api': 'http://localhost:3000' }
        },
       optimization: {
            minimizer: [plugins.uglify],
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
        resolve: {
            extensions: ['.ts', '.js', '.vue', '.vue.ts'],
            modules: [
                path.resolve(__dirname, _.folder(paths.dist.styles)),
                'node_modules'
            ],
            alias: {
                'styles': path.resolve(__dirname, _.folder(paths.src.styles) + '/base'),
                '~': path.resolve(__dirname, _.folder(paths.src.app)),
                'test': path.resolve(__dirname, _.folder(paths.test)),
                'vue$': 'vue/dist/vue.runtime.common.js'
            }
        },
        devtool: (() => environment === environments.production ? false : 'inline-source-map')(),
        ...config
    })
};
