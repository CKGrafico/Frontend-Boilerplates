let options = require('../../tasks.config.json');

require('./helpers').parsePath(options.paths);

module.exports = options;