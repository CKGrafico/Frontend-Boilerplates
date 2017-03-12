let paths = {
    port: 4000,

    app: {
        assets: {
            images: {},
            fonts: {}
        },

        ts: {
            _files: '**/*.ts',
            _folder: 'ts',
        },

        scss: {
            _files: '**/*.scss',
        }
    },

    dist: {
        assets: {
            images: {},
            fonts: {}
        },
        css: {},
        js: {},
        temp: {},
        main: {
            _files: 'app.js',
            _folder: 'temp',
        },
    }
};

require('./gulpfile.helpers').parsePath(paths);
module.exports = paths;