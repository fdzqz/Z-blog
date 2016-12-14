const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    devtool: 'eval-source-map',

    entry: __dirname + '/src/index.js',
    output: {
        path: './build',
        filename: 'bundle.js'
    },
    module: {
        loader: [
            // json-loader
            {
                test: /\.json$/,
                loader: 'json'
            },
            // babel-core，babel-loader，babel-preset-es2015，babel-preset-react
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel'
            },
            // style-loader，css-loader，postcss-loader，autoprefixer
            {
                test: /\.css$/,
                loader: 'style!css?modules!postcss'
            }
        ]
    },
    postcss: [
        // 调用autoprefixer插件
        require('autoprefixer')
    ],
    plugins: [
        // html-webpack-plugin
        new HtmlWebpackPlugin({
            template: __dirname + "/app/index.tmpl.html"//new 一个这个插件的实例，并传入相关的参数
        }),
        // babel-plugin-react-transform，react-transform-hmr
        // new webpack.HotModuleReplacementPlugin() //热加载插件
    ],
    // webpack-dev-server
    devServer: {
        // 文件所在目录
        contentBase: './build',
        // port: 7000,
        // 终端输出颜色
        hot: true,
        colors: true,
        historyApiFallback: true,
        // 源文件改动后自动刷新
        inline: true
    }
}
