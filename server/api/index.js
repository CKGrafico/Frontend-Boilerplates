const glob = require('glob');

module.exports = (app) => {
  const modules = glob.sync('./**/*.router.*');
  const keyword = 'api/';

  modules.forEach(x => {
    const position = x.indexOf(keyword);

    if (position < 0) {
      return;
    }

    const path = './' + x.slice(position + keyword.length);
    require(path)(app);
  });
};
