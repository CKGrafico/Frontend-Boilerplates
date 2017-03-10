module.exports = (gulp, paths, $, _) => {
    let dest = _.folder(paths.dist.client.assets.images);
    gulp.src(_.files(paths.app.client.assets.images))
        .pipe($.newer(dest))
        .pipe($.imagemin())
        .pipe(gulp.dest(dest));

    let dest2 = _.folder(paths.dist.client.assets.fonts);
    return gulp.src(_.files(paths.app.client.assets.fonts))
        .pipe($.newer(dest2))
        .pipe($.fontmin())
        .pipe(gulp.dest(dest2));
};