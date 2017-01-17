module.exports = (gulp, paths, $, _) => {
    return gulp.src(_.files(paths.app.scss))
        .pipe($.sassLint())
        .pipe($.sassLint.format())
        .pipe($.sassLint.failOnError())
};