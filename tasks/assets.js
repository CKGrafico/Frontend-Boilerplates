module.exports = (gulp, paths, $, _) => {
    let dest = _.folder(paths.dist.assets.fonts);
    return gulp.src(_.files(paths.app.assets.fonts))
        .pipe($.newer(dest))
        .pipe($.fontmin())
        .pipe(gulp.dest(dest));
};