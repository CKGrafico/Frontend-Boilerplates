declare var require: any;

console.log('hola')
const testsContext = require.context(".", true, /\.spec.ts$/);
console.log(testsContext)
testsContext.keys().forEach(testsContext);

// add all ts files to include non referenced files in report
// const srcContext = require.context("../src", true, /^\.\/(?!app(\.ts)?$)/);
// srcContext.keys().forEach(srcContext);