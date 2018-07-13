// https://webpack.js.org/contribute/writing-a-plugin/
const RuleSet = require('webpack/lib/RuleSet')

class HelloWorldPlugin {
    constructor(loader) {
        this.loader = loader;
    }

    apply(compiler) {

        compiler.hooks.compilation.tap('HelloWorldPlugin', (compilation, callback) => {
            // for (const filename in compilation.assets) {
                console.log(compilation)
            // }
        });
    }
}

module.exports = (env, envs) => {
    if (!envs) {
        return;
    }

    const build = loader => {
        const defaultConfig = new HelloWorldPlugin(loader);

        const plugin = {
            [envs.production]: defaultConfig,
            [envs.development]: defaultConfig,
            [envs.local]: defaultConfig
        };

        return plugin[env];
    }

    return options => build(options);
};