const loaderUtils = require('loader-utils');
const path = require('path')
const res = rel => path.resolve(__dirname, rel)

/**
 * Allows to the components to be exported as NameComponent or Name
 * but also to have the tag like <name />
 */
module.exports = function () {
    // Extend build
    this.extendBuild(config => {
        config.module.rules.push(
            {
                test: /.vue$/,
                loader: 'components-name'
            }
        );

        config.resolveLoader.alias = config.resolveLoader.alias || {};
        config.resolveLoader.alias['components-name'] = res('./components-name.loader');
    })
}
