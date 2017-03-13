var fs = require('fs');
var browserify = require('browserify');
var vueify = require('vueify');
var tsify = require('tsify');

module.exports = (gulp, paths, $, _) => {
    return browserify()
    .add('./app/ts/index.ts')
    .plugin(tsify, { noImplicitAny: true })
    .transform(vueify)
    .bundle()
    .on('error', function (error) { console.error(error.toString()); })
    .pipe(fs.createWriteStream('./dist/js/app.js'));
};
