module.exports = (env, envs) => {
    let options = {
        [envs.production]: {
            configFile: '.scripts-lint.yml',
            emitError: true,
            failOnError: true
        },
        [envs.development]: {
            configFile: '.scripts-lint.yml',
            emitError: true,
            failOnError: true
        },
        [envs.local]: {
            configFile: '.scripts-lint.yml'
        }
    };

    return {
        test: /\.js$/,
        enforce: 'pre',
        loader: 'eslint-loader',
        options: options[env]
    }
};