const del = require('del');

module.exports = (gulp, paths, $, _) => {
    gulp.task('clean', () => {
        return del([
            _.files(paths.dist), 
            _.folder(paths.dist.assets, _.NOT)
        ]);
    });
};