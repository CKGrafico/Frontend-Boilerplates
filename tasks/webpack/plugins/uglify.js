const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = (env, envs) => {
    if (!envs) { 
        return;
    }

    const defaultConfig = new UglifyJSPlugin({
      uglifyOptions: {
        keep_classnames: true,
        keep_fnames: true,
      }
    });

    const plugin = {
        [envs.production]: defaultConfig
    };

    return plugin[env];
};
