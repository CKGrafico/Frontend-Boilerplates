module.exports = (env, envs) => {
    let options = {
        [envs.production]: {
            configFile: 'tslint.json',
            emitErrors: true,
            failOnHint: true,
            project: 'tsconfig.json',
            typeCheck: true
        },
        [envs.development]: {
            configFile: 'tslint.json',
            emitErrors: true,
            failOnHint: true,
            project: 'tsconfig.json',
            typeCheck: true
        },
        [envs.local]: {
            configFile: 'tslint.json',
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