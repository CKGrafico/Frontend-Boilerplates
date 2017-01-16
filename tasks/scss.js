module.exports = (gulp, paths, $, _) => {
    gulp.task('scss', () => {
        return gulp.src(_.files(paths.app.scss))
            .pipe($.environment.if.development($.sourcemaps.init()))
            .pipe($.sass().on('error', $.sass.logError))
            .pipe($.autoprefixer({ browsers: ['last 2 versions'] }))
            .pipe($.environment.if.production($.cleanCss()))
            .pipe($.environment.if.development($.sourcemaps.write()))
            .pipe(gulp.dest(_.folder(paths.dist.css)));
    });
};