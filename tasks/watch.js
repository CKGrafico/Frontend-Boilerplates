module.exports = (gulp, paths, $, _, tasks) => {
    gulp.watch(_.files(paths.app.client.scss), gulp.series(tasks.scssLint, tasks.scss));
    gulp.watch(_.files(paths.app.client.ts), gulp.series(tasks.tsLint, tasks.ts));
    gulp.watch(_.files(paths.app.server.ts), gulp.series(tasks.tsLint, tasks.tsServer));
    gulp.watch(_.folder(paths.app.client) + '/index.html', tasks.copy);
    gulp.watch(_.files(paths.app.client.assets.images), tasks.assets);
};