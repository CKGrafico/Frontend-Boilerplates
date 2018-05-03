const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = (env, envs) => {
    if (!envs) { 
        return;
    }

    const defaultConfig = new UglifyJSPlugin();

    const plugin = {
        [envs.production]: defaultConfig
    };

    return plugin[env];
};