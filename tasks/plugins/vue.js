const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = (env, envs) => {
    if (!envs) { 
        return;
    }

    const defaultConfig = new VueLoaderPlugin();

    const plugin = {
        [envs.production]: defaultConfig,
        [envs.development]: defaultConfig,
        [envs.local]: defaultConfig
    };

    return plugin[env];
};