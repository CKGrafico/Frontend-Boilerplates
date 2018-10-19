module.exports = (env, envs) => {
    let options = {
        [envs.production]: {
            configFile: 'tslint.json',
            emitErrors: true,
            failOnHint: true,
            project: 'tsconfig.json',
            typeCheck: false,
            formatter: 'stylish'
        },
        [envs.development]: {
            configFile: 'tslint.json',
            emitErrors: true,
            failOnHint: false,
            project: 'tsconfig.json',
            typeCheck: false,
            formatter: 'stylish'
        }
    };

    return {
        test: /\.ts$/,
        exclude: /node_modules/,
        loader: 'tslint-loader',
        options: options[env]
    }
};