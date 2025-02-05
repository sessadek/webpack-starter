const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        app: [
            'babel-polyfill',
            './src/app.js'
        ]
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'app.bundle.js'
    },
    module: {
        rules: [{
            test: /\.js?$/,
            exclude: /node_modules/,
            // loader: 'babel-loader',
            // options: {
            //     presets: ['@babel/env', '@babel/stage-0']
            // }
        }]
    }
}