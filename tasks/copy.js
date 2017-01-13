module.exports = (gulp, paths, $, _) => {
    gulp.task('copy', () => {
        return gulp.src(_.folder(paths.app) + '/index.html')
            .pipe(gulp.dest(_.folder(paths.dist)));
    });
};