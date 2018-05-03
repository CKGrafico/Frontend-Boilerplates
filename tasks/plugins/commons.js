const webpack = require('webpack');

module.exports = (env, envs) => {
    if (!envs) { 
        return;
    }

    const defaultConfig = new webpack.optimize.CommonsChunkPlugin({ name: 'vendor', filename: 'vendor.js' });

    const plugin = {
        [envs.production]: defaultConfig,
        [envs.development]: defaultConfig,
        [envs.local]: defaultConfig
    };

    return plugin[env];
};