
module.exports = (gulp, paths, $, _) => {
    const options = {
        failAfterError: false,
        syntax: 'scss',
        reporters: [
            { formatter: 'string', console: true }
        ]
    };

    return gulp.src(_.files(paths.src.styles))
    .pipe($.environment.if.development($.stylelint(options)))
    .pipe($.environment.if.production($.stylelint({ ...options, failAfterError: true })));
    
};