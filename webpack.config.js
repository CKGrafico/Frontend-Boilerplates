let rules = require('require.all')('./tasks/rules');
let plugins = require('require.all')('./tasks/plugins');

module.exports = env => {
    let environment = env.NODE_ENV;
    env.NODE_ENV = JSON.stringify(environment);

    rules((name, rule) => rule(environment));
    plugins((name, rule) => rule(environment));

    return ({
        mode: environment,
        entry: {
            app: ['./app/scripts/app.js', './app/styles/app.scss']
        },
        output: {
            filename: '[name].js'
        },
        module: {
            rules: [
                // rules.scriptsLint,
                rules.scripts,
                rules.styles,
            ]
        },
        plugins: [
            plugins.html,
            plugins.globals,
            plugins.uglify,
            plugins.extractStyles,
        ],
        devtool: (() => environment === 'production' ? false : 'inline-source-map')()
    })
};
