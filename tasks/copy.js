module.exports = (gulp, paths, $, _) => {
    const version = `d=${Date.now()}`;

    return gulp.src(_.folder(paths.src) + '/index.html')
        .pipe($.stringReplace('{version}', version))
        .pipe(gulp.dest(_.folder(paths.dist)));
};
