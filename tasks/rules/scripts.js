module.exports = (env, envs) => {
    return {
        test: /\.ts$/,
        exclude: /node_modules|vue\/src/,
        use: [
            {
                loader: 'babel-loader'
            },
            {
                loader: 'ts-loader',
                options: {
                    appendTsSuffixTo: [/\.vue$/]
                }
            }
        ]
    }
};