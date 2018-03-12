const gulp = require('gulp');
const noop = require('gulp-noop');
const NOT = true;

let envs = {};

const keyFolder = 'folder';
const keyFiles = 'files';

let clone = (finalObj, initalObj) => {
    var obj = finalObj || {};
    for (var i in initalObj) {
        var prop = initalObj[i];

        if (prop === obj) {
            continue;
        }

        if (typeof prop === 'object') {
            if (prop.constructor === Array) {
                obj[i] = clone([], prop);
            } else {
                obj[i] = Object.create(prop);
            }
        } else {
            obj[i] = prop;
        }
    }
    return obj;
}

module.exports = {
    NOT: NOT,

    files: (path, not) => {
        return not === NOT ? '!' + path[keyFiles] : path[keyFiles];
    },

    folder: (path, not) => {
        return not === NOT ? '!' + path[keyFolder] : path[keyFolder];
    },

    clone: (finalObj, initalObj) => clone(finalObj, initalObj),

    parsePath: (paths) => {
        let parser = (obj, parent) => {
            let folder;

            if (parent) {
                folder = obj[keyFolder];

                if (folder === '..') {
                    let i = parent.lastIndexOf('/');
                    folder = parent.substring(0, i);
                } else if (folder) {
                    let i = parent.lastIndexOf('/');
                    folder = parent.substring(0, i) + `/${folder}`;
                } else {
                    folder = parent;
                }

                obj[keyFolder] = folder;
                obj[keyFiles] = obj[keyFiles] ? `${folder}/${obj[keyFiles]}` : `${folder}/**/*.*`;
            }

            Object.keys(obj).forEach(key => {
                if (typeof obj[key] === 'object') {
                    parser(obj[key], `${folder || parent || '.'}/${key}`);
                }
            });
        };

        parser(paths);
    }
};