const { Nuxt } = require('@nuxt/core');
const { Builder } = require('@nuxt/builder');
const { BundleBuilder } = require('@nuxt/webpack');
const config = require('../../nuxt.config.js');

const stopProcessIfCalledTimes = (times, callback) => {
  let counter = times;
  const compilerOptionMap = {};

  return ({ name, compiler }) => {
    let vueLoader = null;

    compiler.options.module.rules.forEach((x, i) => {
      if (!x.use) {
        return;
      }

      if (x.use[0].loader !== 'vue-loader') {
        return;
      }

      vueLoader = compiler.options.module.rules.splice(i, 1);
    });

    if (vueLoader) {
      compiler.options.module.rules.unshift(vueLoader[0]);
    }

    compilerOptionMap[name] = compiler;
    counter--;
    if (counter === 0) {
      callback(compilerOptionMap);
    }
  };
};

module.exports = () => {
  return new Promise((resolve) => {
    const nuxt = new Nuxt(config);
    nuxt.options.dev = true;
    nuxt.options.build.quiet = true;

    let stopProcessWhenDone = stopProcessIfCalledTimes(1, resolve);

    nuxt.hook('build:before', (nuxt, buildOptions) => {
      if (buildOptions.ssr) {
        stopProcessWhenDone = stopProcessIfCalledTimes(2, resolve);
      }
    });

    nuxt.hook('build:compile', ({ name, compiler }) => {
      stopProcessWhenDone({ name, compiler });
    });


    const builder = new Builder(nuxt, BundleBuilder);

    builder.build();
  });
};
