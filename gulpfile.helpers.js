const paths = require('./gulpfile.paths');
const gulp = require('gulp');
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

    parsePath: (paths) => {
        let parser = (obj, parent) => {
            if (parent) {
                let folder = obj._folder;
                if (folder) {
                    let i = parent.lastIndexOf('/');
                    folder = parent.substring(0, i) + `/${folder}`;
                } else {
                    folder = parent;
                }

                obj._folder = folder;
                obj._files = obj._files ? `${folder}/${obj._files}` : `${folder}/**/*.*`;
            }

            Object.keys(obj).forEach(key => {
                if (typeof obj[key] === 'object') {
                    parser(obj[key], `${parent || '.'}/${key}`);
                }
            });
        };

        parser(paths);
    }
};