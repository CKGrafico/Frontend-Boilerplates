module.exports = (gulp, paths, $, _) => {
    return gulp.src(_.folder(paths.src) + '/index.html')
        .pipe(gulp.dest(_.folder(paths.dist)));
};