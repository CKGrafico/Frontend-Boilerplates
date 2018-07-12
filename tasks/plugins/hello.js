function HelloWorldPlugin(options) {
// Setup the plugin instance with options...
}

HelloWorldPlugin.prototype.apply = function(compiler) {
    compiler.plugin('done', function() {
        console.log('Hello World!'); 
    });
};

module.exports = (env, envs) => {
    if (!envs) { 
        return;
    }

    const defaultConfig = new HelloWorldPlugin();

    const plugin = {
        [envs.production]: defaultConfig,
        [envs.development]: defaultConfig,
        [envs.local]: defaultConfig
    };

    return plugin[env];
};