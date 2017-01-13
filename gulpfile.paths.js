module.exports = {
    port: 4000,
    
    app: {
        _folder: './app',

        assets: {
           _folder: './app/assets',

           images: {
               _folder: './app/assets/images',
               _files: './app/assets/images/**/*.*',
           },

           fonts: {
               _folder: './app/assets/fonts',
               _files: './app/assets/fonts/**/*.*'
           }
       },

       scripts: {
            _files: './app/js/**/*.js',
            _folder: './app/js',

            main: {
                _files: './app/js/app.js',
                _folder: './app/js',
            },
        },

        scss: {
            _files: './app/scss/**/*.scss',
            _folder: './app/scss',
        }
    },

    dist: {
       _files: './dist/*',
       _folder: './dist',

       assets: {
           _folder: './dist/assets',

           images: {
               _folder: './dist/assets/images',
               _files: './dist/assets/images/**/*.*',
           },

           fonts: {
               _folder: './dist/assets/fonts',
               _files: './dist/assets/fonts/**/*.*',
           }
       },

       css: {
           _folder: './dist/css'
       },

       js: {
           _folder: './dist/js'
       }
    }
};