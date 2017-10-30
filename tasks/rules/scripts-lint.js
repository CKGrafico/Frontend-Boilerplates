module.exports = (env, envs) => {
    let options = {
        [envs.production]: {
            configFile: '.scripts-lint.yml',
            emitError: true,
            failOnError: true,
            project: 'tsconfig.json',
            typeCheck: true
        },
        [envs.development]: {
            configFile: '.scripts-lint.yml',
            emitError: true,
            failOnError: true,
            project: 'tsconfig.json',
            typeCheck: true
        },
        [envs.local]: {
            configFile: '.scripts-lint.yml',
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