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

    sequence: (...tasks) => {
        let last = tasks.pop();

        if (Object.keys(envs).includes(last)) {
            tasks = tasks.map(task => task.replace('*', `:${last}`));
        } else {
            tasks.push(last);
        }

        return sequence.apply(this, tasks)
    },

    get envs() {
        return envs;
    },

    set envs(_envs) {
        _envs.forEach(env => {
            envs[env] = env;
        });
    },

    task: (name, task, env) => {
        if(!env) {
            return gulp.task(name, () => task());
        }

        return gulp.task(`${name}:${env}`, () => task(env));
    },

    ensure: (method, wanted, current) => {
        return wanted === current ? method : noop();
    }
};