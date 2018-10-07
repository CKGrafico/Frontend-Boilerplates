const VueLoaderPlugin = require('vue-loader/lib/plugin');
const VueBuilder = require('vue-builder-webpack-plugin');

module.exports = (env, envs) => {
    if (!envs) { 
        return;
    }

    const build = path => {
        const defaultConfigLoader = new VueLoaderPlugin();
        const pluginLoader = {
            [envs.development]: defaultConfigLoader,
            [envs.production]: defaultConfigLoader
        };

        const defaultConfigBuilder = new VueBuilder({ 
            path,
            allScoped: true
        });
        const pluginBuilder = {
            [envs.development]: defaultConfigBuilder,
            [envs.production]: defaultConfigBuilder
        };

        return [
            pluginBuilder[env],
            pluginLoader[env]
        ];
    }

    return path => build(path)
};