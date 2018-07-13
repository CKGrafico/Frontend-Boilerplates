const path = require('path')
const res = rel => path.resolve(__dirname, rel)

module.exports = (env, envs, config) => {
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

    return {
        test: /\.html.vue$/,
        enforce: 'pre',
        use: [
            {
                loader: 'separated-files'
            }
        ]
    }
};