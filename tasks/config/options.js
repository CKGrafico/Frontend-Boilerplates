let options = require('../../tasks.config.json');
const $ = require('gulp-load-plugins')();
const _ = require('./helpers');

// Configure paths
_.parsePath(options.paths);

// Configure environments
const notAllowed = ['current', 'if', 'is'];
options.environments = {};
Object.keys($.environment).forEach(env => {
    if (notAllowed.includes(env)) {
        return;
    }

    options.environments[env] = env;
});
module.exports = options;