const glob = require('glob');
const PurgecssPlugin = require('purgecss-webpack-plugin');

module.exports = (env) => {
  const defaultConfig = new PurgecssPlugin({
    paths: () => glob.sync('./src/**/*.html', { nodir: true })
  });

  const plugin = {
    production: defaultConfig,
    development: defaultConfig
  };

  return plugin[env];
};
