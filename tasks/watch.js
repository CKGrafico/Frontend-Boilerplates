module.exports = (gulp, paths, $, _, options, tasks) => {
    const interval = { interval: 500 };

    gulp.watch(_.files(paths.app.styles), interval, gulp.series(tasks.stylesLint, tasks.styles));
    gulp.watch(_.folder(paths.app) + '/index.html', interval, tasks.copy);
    gulp.watch(_.files(paths.app.assets.images), interval, tasks.assets);
};