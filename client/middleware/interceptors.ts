/**
 * Add interceptors to requests
 */
const KEY = 'middlewareInteceptorsConfigured';
export default async ({ app, store, redirect, req }) => {
  if (global[KEY]) {
    return;
  }

  global[KEY] = true;

  if (process.server) {
    const _fetch = require('node-fetch');

    const fetch = function (url, ...args) {
      let localUrl = url;

      if (process.server && url[0] === '/') {
        localUrl = `${req.protocol}://${req.get('Host')}${url}`;
      }

      return _fetch.call(this, ...[localUrl, ...args]);
    };

    fetch.prototype = Object.create(_fetch.prototype);
    fetch.prototype.constructor = fetch;

    global['fetch'] = fetch;
  } else {
    require('whatwg-fetch');
  }

  const fetchIntercept = require('fetch-intercept');

  fetchIntercept.register({
    request: function (url, defaultConfig) {
      if (!url.includes || !url.includes(store.state.config.settings.apiUrl)) {
        return [url, defaultConfig];
      }

      const config = defaultConfig || {};
      config.headers = config.headers || {};

      config.headers['Accept-Language'] = app.i18n.locale || 'en';

      return [url, config];
    },

    requestError: (error) => {
      return Promise.reject(error);
    },

    response: (response) => {
      return response;
    },

    responseError: (error) => {
      return Promise.reject(error);
    }
  });
};
