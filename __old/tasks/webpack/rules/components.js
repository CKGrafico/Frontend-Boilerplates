module.exports = (env, envs, config) => {
    return [
        {   // Vue Files
            test: /\.vue$/,
            exclude: /node_modules/,
            use: [
                'vue-loader'
            ]
        },
        {   // Sass in components
            test: /\.scss$/,
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