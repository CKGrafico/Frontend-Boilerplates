module.exports = (gulp, paths, $, _, tasks) => {
    gulp.watch(_.files(paths.app.styles), gulp.series(tasks.stylesLint, tasks.styles));
    gulp.watch(_.folder(paths.app) + '/index.html', tasks.copy);
    gulp.watch(_.files(paths.app.assets.images), tasks.assets);
};