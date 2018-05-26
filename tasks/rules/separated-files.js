const loaderUtils = require('loader-utils');
const path = require('path')
const res = rel => path.resolve(__dirname, rel)

/**
 * Allows developers to use .vue files or
 * separated files following this structure
 * NAMEOFTHEFILE.html.vue
 * NAMEOFTHEFILE.ts
 * NAMEOFTHEFILE.scss
 */
module.exports = (env, envs, config) => {
    config.resolveLoader = config.resolveLoader || {};
    config.resolveLoader.alias = config.resolveLoader.alias || {};
    config.resolveLoader.alias['separated-files'] = res('../loaders/separated-files.loader');

    return {
        test: /\.vue$/,
        enforce: 'pre',
        loader: 'separated-files'
    };
}