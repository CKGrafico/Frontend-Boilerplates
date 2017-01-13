// Require all the rollup plugins
const r = {
    nodeResolve: require('rollup-plugin-node-resolve'),
    inject: require('rollup-plugin-node-resolve'),
    commonjs: require('rollup-plugin-commonjs'),
    babel: require('rollup-plugin-babel')
};

module.exports = (gulp, paths, $, _) => {
    let scripts = env => {
        return gulp.src(_.files(paths.app.scripts))
            .pipe(_.ensure($.sourcemaps.init(), _.envs.debug, env))
            .pipe($.rollup({
                allowRealFiles: true,
                context: 'window',
                entry: _.files(paths.app.scripts.main),
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
            .pipe(_.ensure($.uglify(), _.envs.release, env))
            .pipe(_.ensure($.sourcemaps.write(), _.envs.debug, env))
            .pipe(gulp.dest(_.folder(paths.dist.js)));
    };

    _.task('scripts', scripts, _.envs.debug);
    _.task('scripts', scripts, _.envs.release);
};