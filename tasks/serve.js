module.exports = (gulp, paths, $, _) => {
    return $.nodemon({
        script: './dist/server/server.js',
        ext: 'js html',
        env: { 'NODE_ENV': 'development' }
    })
};