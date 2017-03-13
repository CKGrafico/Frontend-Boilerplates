module.exports = (gulp, paths, $, _, tasks) => {
    gulp.watch([_.files(paths.app.scss), _.files(paths.app.scss_components)], gulp.series(tasks.scssLint, tasks.scss));
    gulp.watch(_.files(paths.app.ts), gulp.series(tasks.tsLint, tasks.tsVue));
    gulp.watch(_.folder(paths.app) + '/index.html', tasks.copy);
    gulp.watch(_.files(paths.app.assets.images), tasks.assets);
};