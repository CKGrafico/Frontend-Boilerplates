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

let parseLevel = (obj, parent) => {
    if (parent) {
        obj._files = obj._files || '**/*.*'
        obj._folder = obj._folder || parent;
    }

    Object.keys(obj).forEach(key => {
        if (typeof obj[key] === 'object') {
            parseLevel(obj[key], key);
            obj[key]._parent = parent;
        }
    });
};

let parsePaths = () => {
 parseLevel(paths);
};

parsePaths();