const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: __dirname + '/app/main.js',
    output: {
        path: __dirname + '/public',
        filename: 'bundle.js'
    },
    module: {
        loader: [
            {
                test: /\.json$/,
                loader: 'json'
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel'
            },
            // style-loader，css-loader，postcss-loader，autoprefixer
            {
                test: /\.css$/,
                loader: 'style!css?modules!postcss'
            },
            postcss: [
                // 调用autoprefixer插件
                require('sutoprefixer')
            ],
            plugins: [
                new HtmlWebpackPlugin({
                    template: __dirname + '/app/index.tmpl.html'
                })
            ]
        ]
    }
}
