// Import dependencies
const gulp = require('gulp');
const $ = require('gulp-load-plugins')();

// Import configurations
const paths = require('./tasks/config/paths');
const _ = require('./tasks/config/helpers');

let tasks = require('require.all')('./tasks');
tasks((name, task) => { func = () => task(gulp, paths, $, _, tasks); func.displayName = name; return func});

// Configure gulp tasks
gulp.task('default', gulp.series(tasks.clean, tasks.stylesLint, tasks.styles, tasks.scriptsLint, tasks.scripts, tasks.copy, tasks.assets));
gulp.task('watcher', gulp.parallel(tasks.serve, tasks.watch));