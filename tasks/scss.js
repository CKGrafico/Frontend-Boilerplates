module.exports = (gulp, paths, $, _) => {

    let scss = env => {
        return gulp.src(_.files(paths.app.scss))
            .pipe(_.ensure($.sourcemaps.init(), _.envs.debug, env))
            .pipe($.sass().on('error', $.sass.logError))
            .pipe($.autoprefixer({browsers: ['last 2 versions']}))
            .pipe(_.ensure($.cleanCss(), _.envs.release, env))
            .pipe(_.ensure($.sourcemaps.write(), _.envs.debug, env))
            .pipe(gulp.dest(_.folder(paths.dist.css)));
    };

    _.task('scss', scss, _.envs.debug);
    _.task('scss', scss, _.envs.release);
};