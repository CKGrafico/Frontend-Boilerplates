const del = require('del');

module.exports = (gulp, paths, $, _) => {
    return del([
        _.files(paths.dist.temp)
    ]);
};