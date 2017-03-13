var fs = require('fs');
var browserify = require('browserify');
var vueify = require('vueify');
var tsify = require('tsify');

module.exports = (gulp, paths, $, _) => {
    return browserify()
    .add(_.files(paths.app.main))
    .plugin(tsify, { noImplicitAny: true })
    .transform(vueify)
    .bundle()
    .on('error', function (error) { console.error(error.toString()); })
    .pipe(fs.createWriteStream(_.folder(paths.dist.js) + '/app.js'));
};
