export default function () {
  const options = {
    configFile: 'tslint.json',
    emitErrors: true,
    failOnHint: false,
    project: 'tsconfig.json',
    typeCheck: false,
    formatter: 'stylish'
  };

  this.extendBuild((config) => {
    config.module.rules.push({
      test: /\.ts$/,
      exclude: /node_modules/,
      loader: 'tslint-loader',
      options
    });
  });
}
