module.exports = (env) => {
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
