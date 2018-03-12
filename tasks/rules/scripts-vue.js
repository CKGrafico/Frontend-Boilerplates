module.exports = (env, envs) => {
    return {
        test: /\.vue$/,
        exclude: /\*.ts$/,
        loader: 'vue-loader',
        options: {
            esModule: true
        }
    }
};