const REGEX_ANY_SYMBOL_EXCEPT_COLON_COMMA_HASH = /[^\w:#,]/g;

function cssMapToDictionary(cssMap = '(brightest: #ffffff,brighter: #f3f3f3)') {
  const dictionary = {};

  cssMap
    .replace(REGEX_ANY_SYMBOL_EXCEPT_COLON_COMMA_HASH, '')
    .split(',')
    .forEach((element) => {
      const tuple = element.split(':');
      dictionary[tuple[0]] = tuple[1];
    });

  return dictionary;
}

module.exports = function (cssMap, key) {
  return cssMapToDictionary(cssMap)[key];
};
