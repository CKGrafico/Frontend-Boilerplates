module.exports = (env) => {
  return [
    {
      test: /\.(png|jpg|gif)$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            outputPath: 'images',
          },
        },
      ],
    },
    {
      test: /\.(woff(2)?|ttf|eot|svg)$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            outputPath: 'fonts',
          },
        },
      ],
    }
  ]
};
