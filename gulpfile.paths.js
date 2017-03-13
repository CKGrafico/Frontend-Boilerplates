let paths = {
    port: 4000,

    app: {
        assets: {
            images: {},
            fonts: {}
        },

        main: {
            _files: 'app.ts',
            _folder: 'ts'
        },

        ts: {
            _files: '**/*.ts',
            _folder: 'ts'
        },

        scss: {
            _files: '**/*.scss'
        },

        scss_main: {
            _files: 'app.scss',
            _folder: 'scss'
        },

        scss_components: {
            _files: '**/*.scss',
            _folder: 'ts'
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