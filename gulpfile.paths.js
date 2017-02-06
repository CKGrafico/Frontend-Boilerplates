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

        main: {
            _files: 'app.ts',
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
        js: {}
    }
};

require('./gulpfile.helpers').parsePath(paths);
module.exports = paths;