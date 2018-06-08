module.exports = (env, envs) => {
    return {
        test: /\.vue$/,
        use: [
            {
                loader: 'babel-loader'
            },
            {
                loader: 'vue-loader'
            }
        ]
    }
};