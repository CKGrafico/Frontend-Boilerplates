const rollup = require('rollup');
const typescript = require('rollup-plugin-typescript');
const inject = require('rollup-plugin-inject');
const nodeResolve = require('rollup-plugin-node-resolve');
const commonjs = require('rollup-plugin-commonjs');
const replace = require('rollup-plugin-replace');
const vue = require('rollup-plugin-vue');

module.exports = (gulp, paths, $, _) => {
    return rollup.rollup({
        entry: './app/ts/app.ts',
        plugins: [
            vue({compileTemplate: true}),         
            typescript({
                typescript: require("typescript")
            }),
            nodeResolve({ jsnext: true,
              main: true,
              browser: true 
            }),
            commonjs(),
            replace({
                'process.env.NODE_ENV': '\"production\"'
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
