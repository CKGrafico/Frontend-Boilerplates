let paths = {
    port: 4000,

    app: {
        assets: {
            images: {},
            fonts: {}
        },

        scripts: {
            _files: '**/*.js',

            app: {
                _folder: '..',
                _files: 'app.js'
            },

            vendor: {
                _folder: '..',
                _files: 'vendor.js'
            }
        },

        styles: {
            _files: '**/*.scss',
        }
    },

    dist: {
        assets: {
            images: {},
            fonts: {}
        },
        css: {},
        scripts: {}
    }
};

require('./helpers').parsePath(paths);
module.exports = paths;