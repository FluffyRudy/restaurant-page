const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    entry: {
        main: './src/index.js',
    },
    devServer: {
        static: './dist',
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Fluffy Restaurent'
        })
    ],
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.(png|svg|jpg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(css)$/i,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
};