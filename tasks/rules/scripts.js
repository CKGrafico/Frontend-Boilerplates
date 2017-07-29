module.exports = (env, envs) => {
    return {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
            {
                loader: 'babel-loader'
            }
        ]
    }
};