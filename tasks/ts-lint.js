module.exports = (gulp, paths, $, _) => {
    return gulp.src([
        _.files(paths.app.client.ts),
        _.files(paths.app.server.ts)
    ])
        .pipe($.tslint({
            configuration: 'tslint.json',
            formatter: 'stylish'
        }))
        .pipe($.tslint.report())
};