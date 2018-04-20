const loaderUtils = require('loader-utils');
const path = require('path')
const res = rel => path.resolve(__dirname, rel)

module.exports = function () {
  // Extend build
  this.extendBuild(config => {
    config.module.rules.push(
      {
        test: /.vue$/,
        loader: 'components-name'
      }
    );

    config.resolveLoader.alias = config.resolveLoader.alias || {};
    config.resolveLoader.alias['components-name'] = res('./components-name.loader');
  })
}
