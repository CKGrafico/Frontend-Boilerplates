let options = require('../../tasks.config.json');
const $ = require('gulp-load-plugins')();
const _ = require('./helpers');

// Configure paths
_.parsePath(options.paths);

// Configure environments
$.environment;
let template = {};
_.clone(template, $.environment.development);

Object.keys(options.environments).forEach(env => {
    let envConfig = {};
    _.clone(envConfig, template);
    envConfig.aliases = [];
    envConfig.name = env;

    $.environment[env] = envConfig;
});

$.environment;

module.exports = options;