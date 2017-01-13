module.exports = (gulp, paths, $, _) => {
    gulp.task('scripts-lint', () => {
        return gulp.src(_.files(paths.app.scripts))
            .pipe($.eslint({
                configFile: '.scripts-lint.yml'
            }))
            .pipe($.eslint.format())
            .pipe($.eslint.failAfterError())
    });
};