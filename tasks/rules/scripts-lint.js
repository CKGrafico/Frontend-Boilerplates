module.exports = (env, envs) => {
    let options = {
        [envs.production]: {
            configFile: '.scripts-lint.json',
            emitErrors: true,
            failOnHint: true
        },
        [envs.development]: {
            configFile: '.scripts-lint.json',
            emitErrors: true,
            failOnHint: true
        },
        [envs.local]: {
            configFile: '.scripts-lint.json'
        }
    };

    return {
        test: /\.ts$/,
        enforce: 'pre',
        loader: 'tslint-loader',
        options: options[env]
    }
};