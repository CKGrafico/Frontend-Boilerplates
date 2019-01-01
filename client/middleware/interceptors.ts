/**
 * Add interceptors to requests
 */
const KEY = 'middlewareInteceptorsConfigured';
export default async ({ app, store }) => {
  if (global[KEY]) {
    return;
  }

  global[KEY] = true;

  if (process.server) {
    global['fetch'] = require('node-fetch');
  } else {
    require('whatwg-fetch');
  }

  const fetchIntercept = require('fetch-intercept');

  fetchIntercept.register({
    request: function (url, defaultConfig) {
      const config = defaultConfig || {};
      config.headers = config.headers || {};

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
