module.exports = (gulp, paths, $, _, tasks) => {
    gulp.watch(_.files(paths.app.scss), gulp.series(tasks.scssLint, tasks.scss));
    gulp.watch(_.files(paths.app.scripts), gulp.series(tasks.scriptsLint, tasks.scripts));
    gulp.watch(_.folder(paths.app) + '/index.html', tasks.copy);
    gulp.watch(_.files(paths.app.assets.images), tasks.assets);
};