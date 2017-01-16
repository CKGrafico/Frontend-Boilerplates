// Import dependencies
const gulp = require('gulp');
const $ = require('gulp-load-plugins')();

// Import configurations
const paths = require('./gulpfile.paths');
const _ = require('./gulpfile.helpers');

// Import tasks
require('require-tasks')(['tasks'])(gulp, paths, $, _);

// Configure gulp tasks
gulp.task('default', () => _.series('scss-lint', 'scss', 'scripts-lint', 'scripts', 'copy', 'assets'));
gulp.task('watcher', () => _.series('serve', 'watch'));