// Import dependencies
const gulp = require('gulp');
const $ = require('gulp-load-plugins')();

// Import configurations
const paths = require('./gulpfile.paths');
const _ = require('./gulpfile.helpers');

// Configure environments
_.envs = ['debug', 'release'];

// Import tasks
require('require-tasks')(['tasks'])(gulp, paths, $, _);

// Configure gulp tasks, add * for environments
gulp.task('debug', () => _.sequence('scss-lint', 'scss*', 'scripts-lint', 'scripts*', 'copy', 'assets', _.envs.debug));
gulp.task('release', () => _.sequence('scss*', 'scripts*', 'copy', 'assets', _.envs.release));
gulp.task('watcher', () => _.sequence('serve', 'watch'));