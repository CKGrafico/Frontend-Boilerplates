module.exports = () => {
  return [
    {
      test: /\.(png|jpg|gif)$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]?[hash]',
            publicPath: './dist',
            outputPath: './images'
          }
        }
      ]
    },
    {
      test: /\.(woff(2)?|ttf|eot|svg)$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            publicPath: './fonts',
            outputPath: './fonts'
          }
        }
      ]
    }
  ];
};
