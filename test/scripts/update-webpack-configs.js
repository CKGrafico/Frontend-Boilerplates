const { fork } = require('child_process');
const path = require('path');
const collect = require('./collect-webpack-configs');

module.exports = (configName) => {
  return new Promise(resolve => {
    collect().then(message => {
      const config = message[configName];

      if (!config) {
        throw new Error(`${configName} not found.`);
      }

      resolve(config.options);
    });

  });
};
