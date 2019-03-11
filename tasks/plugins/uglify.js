const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = (env) => {
  const defaultConfig = new UglifyJSPlugin();

  const plugin = {
    production: defaultConfig
  };

  return plugin[env];
};
