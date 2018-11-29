module.exports = (gulp, paths, $, _) => {
    const version = `d=${Date.now()}`;

    return gulp.src(_.folder(paths.app) + '/index.html')
        .pipe($.stringReplace('{version}', version))
        .pipe(gulp.dest(_.folder(paths.dist)));
};
