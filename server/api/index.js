const glob = require('glob');
const dotenv = require('dotenv');

module.exports = (app) => {
  dotenv.config();

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
