// Require all the rollup plugins
const r = {
    nodeResolve: require('rollup-plugin-node-resolve'),
    inject: require('rollup-plugin-node-resolve'),
    commonjs: require('rollup-plugin-commonjs'),
    babel: require('rollup-plugin-babel')
};

module.exports = (gulp, paths, $, _) => {
    gulp.task('scripts', () => {
        return gulp.src(_.files(paths.app.scripts))
            .pipe($.environment.if.development($.sourcemaps.init()))
            .pipe($.rollup({
                allowRealFiles: true,
                context: 'window',
                entry: _.files(paths.app.main),
                format: 'cjs',
                plugins: [
                    r.nodeResolve(),
                    r.commonjs(),
                    r.babel({
                        exclude: 'node_modules/**',
                        presets: [['es2015', { modules: false }]]
                    }),
                    r.inject({
                        include: _.files(paths.app.scripts),
                        exclude: 'node_modules/**',
                        $: 'jquery',
                    })
                ]
            }))
            .pipe($.environment.if.production($.uglify()))
            .pipe($.environment.if.development($.sourcemaps.write()))
            .pipe(gulp.dest(_.folder(paths.dist.js)));
    });
};