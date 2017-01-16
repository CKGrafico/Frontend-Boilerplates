const paths = require('./gulpfile.paths');
const gulp = require('gulp');
const sequence = require('run-sequence');
const noop = require('gulp-noop');
const NOT = true;

let envs = {};

module.exports = {
    NOT: NOT,

    files: (path, not) => {
        return not === NOT ? '!' + path._files : path._files;
    },

    folder: (path, not) => {
        return not === NOT ? '!' + path._folder : path._folder;
    },

    series: (...tasks) => {
        return sequence.apply(this, tasks)
    },
};