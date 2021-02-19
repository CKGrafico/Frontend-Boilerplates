module.exports = (env) => {
  return [
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
            transpileOnly: true, // For hot reloading,
            experimentalWatchApi: true
          }
        }
      ]
    }
  ];
};
