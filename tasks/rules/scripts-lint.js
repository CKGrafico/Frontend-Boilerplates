module.exports = (env) => {
    let options = {
        production: {
            configFile: '.scripts-lint.yml',
            emitError: true,
            failOnError: true,
            project: 'tsconfig.json',
            typeCheck: true
        },
        development: {
            configFile: '.scripts-lint.yml',
            emitError: true,
            failOnError: true,
            project: 'tsconfig.json',
            typeCheck: true
        }
    };

    return {
        test: /\.js$/,
        enforce: 'pre',
        loader: 'eslint-loader',
        options: options[env]
    }
};
