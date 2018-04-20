const loaderUtils = require('loader-utils');
const path = require('path')
const res = rel => path.resolve(__dirname, rel)

module.exports = function () {
  // Clean paths for pages
  this.nuxt.options.router.extendRoutes = (routes) => {
    routes.forEach(route => {
        // For separated files
        if (route.name.includes('.page.html')) {
            const folders = route.path.split('/');
            route.path = route.path.replace('/' +folders[folders.length - 1], '');
            route.name = route.name.replace('-' +folders[folders.length - 1], '');
        }
    })
  };

  // Extend build
  this.extendBuild(config => {
    config.module.rules.push(
      {
        test: /\.vue$/, // /\.html\.vue$/
        enforce: 'pre',
        loader: 'separated-files'
      }
    );

    config.resolveLoader.alias = config.resolveLoader.alias || {};
    config.resolveLoader.alias['separated-files'] = res('./separate-files.loader');
  })
}
