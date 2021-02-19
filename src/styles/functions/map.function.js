const REGEX_ANY_SYMBOL_EXCEPT_COLON_COMMA_HASH_DOT = /[^\w:#,.]/g;

function cssMapToDictionary(cssMap = '(brightest: #ffffff,brighter: #f3f3f3)') {
  const dictionary = {};

  cssMap
    .replace(REGEX_ANY_SYMBOL_EXCEPT_COLON_COMMA_HASH_DOT, '')
    .split(',')
    .forEach((element) => {
      const tuple = element.split(':');
      dictionary[tuple[0]] = tuple[1];
    });

  return dictionary;
}

module.exports = {
  values(cssMap) {
    return Object.values(cssMapToDictionary(cssMap)).join(',');
  },
  keys(cssMap) {
    return Object.keys(cssMapToDictionary(cssMap));
  },
  entries(cssMap) {
    const keys = [];
    const values = [];

    Object.entries(cssMapToDictionary(cssMap)).forEach(([key, value]) => {
      keys.push(key);
      values.push(value);
    });

    return `(${keys}), (${values})`;
  },
  key(cssMap, i) {
    return Object.keys(cssMapToDictionary(cssMap))[i];
  },
  value(cssMap, key) {
    return cssMapToDictionary(cssMap)[key];
  }
};
