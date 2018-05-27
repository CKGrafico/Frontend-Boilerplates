const loaderUtils = require('loader-utils');
const path = require('path')
const res = rel => path.resolve(__dirname, rel)

/**
 * Allows to the components to be exported as NameComponent or Name
 * but also to have the tag like <name />
 */
module.exports = (env, envs, config) => {
    config.resolveLoader = config.resolveLoader || {};
    config.resolveLoader.alias = config.resolveLoader.alias || {};
    config.resolveLoader.alias['components-name'] = res('../loaders/components-name.loader');

    return {
        test: /.vue$/,
        enforce: 'pre',
        loader: 'components-name'
    };
}