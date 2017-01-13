const opn = require('opn');

module.exports = (gulp, paths, $, _) => {
    gulp.task('serve', () => {
        opn('http://localhost:' + paths.port);

        $.connect.server({
            root: _.folder(paths.dist),
            port: paths.port
        });
    });
};