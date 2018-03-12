module.exports = (env, envs) => {
    return {
        test: /\.html$/,
        loader: 'vue-template-loader',
        options: {
            scoped: true
        }
    }
};