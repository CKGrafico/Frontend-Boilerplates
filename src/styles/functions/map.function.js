const mapsCache = {};

function cssMapToDictionary(cssMap = '(brightest: #ffffff,brighter: #f3f3f3)') {
  const dictionary = {};

  cssMap
    .replace(/[()\n\r\t]/g, '')
    .split(/, */g)
    .forEach((element) => {
      const tuple = element.split(':');
      dictionary[tuple[0].trim()] = tuple[1].trim();
    });

  return dictionary;
}

function cachedCssMapToDictionary(cssMap = '') {
  const cachedDictionary = mapsCache[cssMap];
  if (cachedDictionary) {
    return cachedDictionary;
  }

  const newValue = cssMapToDictionary(cssMap);
  mapsCache[cssMap] = newValue;

  return newValue;
}

module.exports = {
  values(cssMap) {
    return Object.values(cachedCssMapToDictionary(cssMap)).join(',');
  },
  keys(cssMap) {
    return Object.keys(cachedCssMapToDictionary(cssMap));
  },
  entries(cssMap) {
    const keys = [];
    const values = [];

    Object.entries(cachedCssMapToDictionary(cssMap)).forEach(([key, value]) => {
      keys.push(key);
      values.push(value);
    });

    return `(${keys}), (${values})`;
  },
  key(cssMap, i) {
    return Object.keys(cachedCssMapToDictionary(cssMap))[i];
  },
  value(cssMap, key) {
    return cachedCssMapToDictionary(cssMap)[key];
  }
};
