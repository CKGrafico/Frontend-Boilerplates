module.exports = (gulp, paths, $, _) => {
    return gulp.src(_.folder(paths.app) + '/index.html')
        .pipe(gulp.dest(_.folder(paths.dist)));
};