module.exports = function rem(pixels, value = 16) {
  return Number(pixels.replace('px', '')) / value + 'rem';
};
