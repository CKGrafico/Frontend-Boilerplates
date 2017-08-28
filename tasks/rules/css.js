// Only to add specific css from components
module.exports = (env, envs) => {
    return {
        enforce: 'post',
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
};