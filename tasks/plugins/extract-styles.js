const MiniCSSExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env) => {
  const defaultConfig = new MiniCSSExtractPlugin();

  const plugin = {
    production: defaultConfig,
    development: defaultConfig
  };

  return plugin[env];
};
