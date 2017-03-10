let paths = {
    port: 4000,

    app: {
        client: {
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
        
        server: {
            ts: {
                _files: '**/*.ts',
                _folder: 'ts',
            }
        }
    },

    dist: {
        client: {
            assets: {
                images: {},
                fonts: {}
            },
            css: {},
            js: {}
        },

        server: {

        }
    }
};

require('./gulpfile.helpers').parsePath(paths);
module.exports = paths;