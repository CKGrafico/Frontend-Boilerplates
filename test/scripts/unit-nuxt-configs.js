const path = require('path');
const { Server } = require('karma');
const { Config } = require('karma/lib/config');
const karmaConfigTests = require(path.resolve(__dirname, '../unit/karma.conf'));
const updateWebpackConfigs = require('./update-webpack-configs');

(async () => {
  const karmaConfig = new Config();
  karmaConfig.singleRun = true;

  const webpack = await updateWebpackConfigs('client');

  karmaConfigTests(karmaConfig, webpack);

  const server = new Server(karmaConfig, function (exitCode) {
    console.log('Karma has exited with ' + exitCode)
    process.exit(exitCode)
  });

  server.start();
})();
