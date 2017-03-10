module.exports = (gulp, paths, $, _) => {
    let tsProject = $.typescript.createProject('./tsconfig.json');

    let tsResult = gulp.src(_.files(paths.app.client.ts))
        .pipe($.environment.if.development($.sourcemaps.init()))
        .pipe(tsProject());

    return tsResult.js
        .pipe($.environment.if.production($.uglify()))
        .pipe($.environment.if.development($.sourcemaps.write()))
        .pipe(gulp.dest(_.folder(paths.dist.client.js)));
};
