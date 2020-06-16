const getFetchPolyfill = async () => {
  const polyfillUrl = 'https://unpkg.com/unfetch/dist/unfetch.umd.js';
  return await window.fetch(polyfillUrl).then((res) => {
    if (res.ok) {
      return res.text();
    }
  });
};

Cypress.Commands.overwrite('visit', async (originalFn, url, options) => {
  let polyfill = !window.fetchPoly && (await getFetchPolyfill());

  const opts = Object.assign({}, options, {
    onBeforeLoad: (window, ...args) => {
      if (!window.fetchPoly) {
        delete window.fetch;
        window.eval(polyfill);
        window.fetchPoly = true;
        window.fetch = window.unfetch;
      }

      if (options && options.onBeforeLoad) {
        return options.onBeforeLoad(window, ...args);
      }
    }
  });

  return originalFn(url, opts);
});
