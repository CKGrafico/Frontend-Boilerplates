const rollup = require('rollup');
const typescript = require('rollup-plugin-typescript');
const inject = require('rollup-plugin-inject');

module.exports = (gulp, paths, $, _) => {
    return rollup.rollup({
        entry: './app/ts/app.ts',
        plugins: [
            typescript({
                typescript: require("typescript")
            }),
            inject({
                include: '**/*.js',
                Vue: 'vue',
            }),
        ],
    })
        .then(function (bundle) {
            bundle.write({
                format: 'iife',
                moduleName: "app",
                // sourceMap: 'inline',
                dest: "./dist/js/app.js"
            });
        })
};
