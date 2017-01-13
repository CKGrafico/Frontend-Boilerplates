module.exports = (gulp, paths, $, _) => {
    gulp.task('assets:images', () => {
        var dest = _.folder(paths.dist.assets.images);
        return gulp.src(_.files(paths.app.assets.images))
            .pipe($.newer(dest))
            .pipe($.imagemin())
            .pipe(gulp.dest(dest));
    });

    gulp.task('assets:fonts', () => {
        var dest = _.folder(paths.dist.assets.fonts);
        return gulp.src(_.files(paths.app.assets.fonts))
            .pipe($.newer(dest))
            .pipe($.fontmin())
            .pipe(gulp.dest(dest));
    });

    gulp.task('assets', ['assets:images', 'assets:fonts']);
};