const opn = require('opn');

module.exports = (gulp, paths, $, _, options) => {
    opn('http://localhost:' + options.port);

    $.connect.server({
        root: _.folder(paths.dist),
        port: options.port
    });
};