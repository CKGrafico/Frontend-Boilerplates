module.exports = (gulp, paths, $, _) => {
    gulp.task('watch', () => {
        gulp.watch(_.files(paths.app.scss), ['scss-lint', 'scss']);
        gulp.watch(_.files(paths.app.scripts), ['scripts']);
        gulp.watch(_.folder(paths.app) + '/index.html', ['copy']);
        return gulp.watch(_.files(paths.app.assets.images), ['assets']);
    });
};