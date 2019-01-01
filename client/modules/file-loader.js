/**
 * This module helps to use file-loader instead url-loader
 */
export default function () {
  const urlLoaderName = 'url-loader';
  const fileLoaderName = 'file-loader';

  this.extendBuild((config) => {
    config.module.rules.forEach(rule => {
      if (!rule.use) {
        return;
      }


      rule.use.forEach(loaderInfo => {
        if (!loaderInfo.loader.includes(urlLoaderName)) {
          return;
        }

        loaderInfo.loader = fileLoaderName;
      });
    });
  });
}
