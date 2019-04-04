const path = require('path');
const rules = require('require.all')('./tasks/rules');
const plugins = require('require.all')('./tasks/plugins');

module.exports = env => {
  let environment = env.NODE_ENV;
  env.NODE_ENV = JSON.stringify(environment);

  rules((name, rule) => rule(environment));
  plugins((name, rule) => rule(environment));

  return ({
    mode: environment,
    entry: {
      app: [
        path.resolve(__dirname, 'src/app/app.ts'),
        path.resolve(__dirname, 'src/styles/app.scss')
      ]
    },
    output: {
      filename: '[name].js'
    },
    module: {
      rules: [
        ...rules.files,
        ...rules.scripts,
        rules.styles,
      ]
    },
    plugins: [
      plugins.html,
      plugins.globals,
      plugins.uglify,
      plugins.extractStyles,
    ],
    resolve: {
      extensions: ['.ts', '.js'],
      alias: {
        'styles': path.resolve(__dirname, 'src/styles'),
        'assets': path.resolve(__dirname, 'src/assets'),
        '~': path.resolve(__dirname, 'src/app')
      }
    },
    devtool: (() => environment === 'production' ? false : 'inline-source-map')()
  })
};
