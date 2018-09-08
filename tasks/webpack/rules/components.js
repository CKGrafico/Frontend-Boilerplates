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

    return [
        {   // Vue Files
            test: /\.vue$/,
            use: [
                'vue-loader',
                'components-name'
            ]
        },
        {   // Vue separated files
            test: /\.vue\.?/,
            use: [
                'components-name'
            ]
        },
        {   // Sass in components
            test: /\.scss$/,
            exclude: /node_modules/,
            use: [
                'vue-style-loader',
                'css-loader',
                'sass-loader',
                
            ]
        },
        {   // CSS in components dependencies
            test: /\.css$/,
            use: [
                'css-loader'
            ]
        }
    ]
};