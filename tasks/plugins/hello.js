// https://webpack.js.org/contribute/writing-a-plugin/
class HelloWorldPlugin {
    constructor(options) {
      this.options = options;
    }
  
    apply(compiler) {
      compiler.hooks.done.tap('HelloWorldPlugin', () => {
        console.log('Hello World!');
        console.log(this.options);
      });
    }
  }

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