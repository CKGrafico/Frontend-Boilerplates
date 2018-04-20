module.exports = (gulp, paths, $, _, options, tasks) => {
    const interval = { interval: 500 };

    gulp.watch([_.files(paths.app.styles), _.files(paths.app.vue)], interval, gulp.series(tasks.stylesLint, tasks.styles));
    gulp.watch(_.files(paths.app.vue), interval, tasks.stylesLint);
    gulp.watch(_.files(paths.app.assets.fonts), interval, tasks.assets);
};