module.exports = (env, envs) => {
    return {
        test: /\.vue$/,
        loader: 'vue-loader',
        /*options: {
            loaders: {
                // Since sass-loader (weirdly) has SCSS as its default parse mode, we map
                // the "scss" and "sass" values for the lang attribute to the right configs here.
                // other preprocessors should work out of the box, no loader config like this necessary.
                'scss': 'vue-style-loader!css-loader!sass-loader',
                'sass': 'vue-style-loader!css-loader!sass-loader?indentedSyntax',
            }
            // other vue-loader options go here
        }*/
    },
    {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: [
            {
                loader: 'babel-loader'
            },
            {
                loader: 'ts-loader',
                options: {
                    appendTsSuffixTo: [/\.vue$/],
                }
            }
        ]
    }
};