let paths = {
    port: 4000,

    app: {
        assets: {
            images: {},
            fonts: {}
        },

        scripts: {
            _files: '**/*.js',
            _folder: 'js',
        },

        main: {
            _files: 'app.js',
            _folder: 'js',
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

require('./helpers').parsePath(paths);
module.exports = paths;