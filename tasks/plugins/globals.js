const webpack = require('webpack');

module.exports = (env) => {
  const defaultConfig = new webpack.DefinePlugin({
    'global': {}
  });

  const plugin = {
    production: defaultConfig,
    development: defaultConfig
  };

  return plugin[env];
};
