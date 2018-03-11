module.exports = (gulp, paths, $, _) => {
    const options = {
        failAfterError: false,
        reporters: [
            { formatter: 'string', console: true }
        ]
    };

    return gulp.src(_.files(paths.app.styles))
        .pipe($.environment.if.local($.stylelint(options)))
        .pipe($.environment.if.development($.stylelint(options)))
        .pipe($.environment.if.production($.stylelint({ ...options, failAfterError: true })))
};