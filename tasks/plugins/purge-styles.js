const glob = require('glob');
const path = require('path');
const PurgecssPlugin = require('purgecss-webpack-plugin');

module.exports = (env) => {
  const defaultConfig = new PurgecssPlugin({
    paths: () => glob.sync('./app/**/*.html', { nodir: true })
  });

  const plugin = {
    production: defaultConfig,
    development: defaultConfig
  };

  return plugin[env];
};
