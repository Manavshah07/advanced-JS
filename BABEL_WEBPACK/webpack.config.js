const path = require('path');
module.exports = {
    entry: {
        app: ['@babel/polyfill', './src/app.js']
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: 'app.bundled.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    },
    devServer: {
        publicPath: '/dist/',
        contentBase: path.join(__dirname, "dist"),
        watchContentBase: true,
        open: true
    }
}