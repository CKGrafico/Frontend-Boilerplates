const path = require('path');

module.exports = () => {
  return {
    lintOnSave: false,
    css: {
      loaderOptions: {
        sass: {
          prependData: `@import '~@/styles/base/_variables.scss';`
        }
      }
    },
    configureWebpack: config => {
      const alias = {
        styles: path.join(__dirname, 'src/styles'),
        assets: path.join(__dirname, 'src/assets'),
        '~': path.join(__dirname, 'src/app')
      };

      const terserOptions = {
        keep_classnames: true,
        keep_fnames: true
      };

      config.resolve.alias = { ...config.resolve.alias, ...alias };
      config.optimization.minimizer[0].options.terserOptions = {
        ...config.optimization.minimizer[0].options.terserOptions,
        ...terserOptions
      };
    }
  };
};
