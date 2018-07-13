const loaderUtils = require('loader-utils');
const path = require('path')
const res = rel => path.resolve(__dirname, rel)

module.exports = (env, envs, config) => {
    
    /**
     * Allows to the components to be exported as NameComponent or Name
     * but also to have the tag like <name />
     */
    config.resolveLoader = config.resolveLoader || {};
    config.resolveLoader.alias = config.resolveLoader.alias || {};
    config.resolveLoader.alias['components-name'] = res('../loaders/components-name.loader');

    /**
     * Allows developers to use .vue files or
     * separated files following this structure
     * NAMEOFTHEFILE.html.vue
     * NAMEOFTHEFILE.ts
     * NAMEOFTHEFILE.scss
     */
    config.resolveLoader = config.resolveLoader || {};
    config.resolveLoader.alias = config.resolveLoader.alias || {};
    config.resolveLoader.alias['separated-files'] = res('../loaders/separated-files.loader');

    return [
        {
            test: /\.vue$/,
            use: [
                'vue-loader',
                'components-name'
            ]
        },
        {
            test: /\.scss$/,
            exclude: /node_modules/,
            use: [
                'vue-style-loader',
                'css-loader',
                'sass-loader'
            ]
        }
    ]
};