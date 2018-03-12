module.exports = (gulp, paths, $, _) => {
    let dest = _.folder(paths.dist.assets.images);
    gulp.src(_.files(paths.app.assets.images))
        .pipe($.newer(dest))
        .pipe($.imagemin())
        .pipe(gulp.dest(dest));

    let dest2 = _.folder(paths.dist.assets.fonts);
    return gulp.src(_.files(paths.app.assets.fonts))
        .pipe($.newer(dest2))
        .pipe($.fontmin())
        .pipe(gulp.dest(dest2));
};