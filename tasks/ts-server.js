module.exports = (gulp, paths, $, _) => {
    let tsProject = $.typescript.createProject('./tsconfig.json');

    let tsResult = gulp.src(_.files(paths.app.server.ts))
        .pipe($.environment.if.development($.sourcemaps.init()))
        .pipe(tsProject());

    return tsResult.js
        .pipe($.environment.if.development($.sourcemaps.write()))
        .pipe(gulp.dest(_.folder(paths.dist.server)));
};
