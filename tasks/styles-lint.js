const merge2 = require('merge2');

// Waiting for https://github.com/ralphcrisostomo/gulp-extract-text/pull/1
//const extract_text      = require('gulp-extract-text');
const through2 = require('through2');
const extract_text = function (params, options) {
    let { pattern_start, pattern_end } = params;
    return through2.obj(function (file, enc, cb) {
        let contents = file.contents.toString('utf8');
        let pattern = new RegExp(`${pattern_start}((.|\\s)*?)${pattern_end}`);
        let extract = pattern.exec(contents);
        extract = extract ? extract[1] : '';
        file.contents = new Buffer(extract);
        return cb(null, file);
    });
};

let extract_text_params = {
    pattern_start: '<style.*?>',
    pattern_end: '</style>'
}

module.exports = (gulp, paths, $, _) => {
    const options = {
        failAfterError: false,
        syntax: 'scss',
        reporters: [
            { formatter: 'string', console: true }
        ]
    };

    // We use rename to help stylelint plugin
    var vueSCSS = gulp.src(_.files(paths.app.vue))
        .pipe(extract_text(extract_text_params));

    return merge2(
        vueSCSS,
        gulp.src(_.files(paths.app.styles))
    )
    .pipe($.environment.if.development($.stylelint(options)))
    .pipe($.environment.if.production($.stylelint({ ...options, failAfterError: true })));
    
};