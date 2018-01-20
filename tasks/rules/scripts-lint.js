module.exports = (env, envs) => {
    let options = {
        [envs.production]: {
            configFile: '.scripts-lint.json',
            emitErrors: true,
            failOnHint: true,
            project: 'tsconfig.json',
            typeCheck: true
        },
        [envs.development]: {
            configFile: '.scripts-lint.json',
            emitErrors: true,
            failOnHint: true,
            project: 'tsconfig.json',
            typeCheck: true
        },
        [envs.local]: {
            configFile: '.scripts-lint.json',
            project: 'tsconfig.json',
            formatter: 'stylish',
            typeCheck: true
        }
    };

    return {
        test: /\.ts$/,
        enforce: 'pre',
        loader: 'tslint-loader',
        options: options[env]
    }
};