const del = require('del');

module.exports = (gulp, paths, $, _) => {
    return del([
        _.files(paths.dist), 
        _.folder(paths.dist.assets, _.NOT)
    ]);
};