module.exports = (gulp, paths, $, _) => {
    gulp.task('scss-lint', () => {
        return gulp.src(_.files(paths.app.scss))
            .pipe($.sassLint())
            .pipe($.sassLint.format())
            .pipe($.sassLint.failOnError())
    });
};