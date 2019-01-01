const runner = require('../e2e/runner');
const updateWebpackConfigs = require('./update-webpack-configs');

(async () => {
  const options = {
    port: 7000,
    host: '127.0.0.1'
  };

  const webpack = await updateWebpackConfigs('client');

  runner(options, webpack);
})();
