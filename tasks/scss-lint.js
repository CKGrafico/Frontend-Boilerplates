module.exports = (gulp, paths, $, _) => {
    return gulp.src([_.files(paths.app.scss), _.files(paths.app.scss_components)])
        .pipe($.sassLint())
        .pipe($.sassLint.format())
        .pipe($.sassLint.failOnError())
};