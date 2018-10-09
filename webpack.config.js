const path = require('path');
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const nodeEnv = process.env.NODE_ENV || 'development';
const isProd = nodeEnv === 'production';

// Change this to toggle debugging bloat
const isDebug = false;

module.exports = {
    entry: {
        app: './src/js/main.jsx',
    },

    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].bundle.js'
    },

    module: {
        rules: [{
            test: /\.css$/,
            use: [
                'style-loader',
                'css-loader'
            ]
        }, {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader"
            }
        }, {
            test: /\.html$/,
            use: [{
                loader: "html-loader",
                options: { minimize: true }
            }]
        }]
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: 'Index File',
            template: './index.html',
            filename: './build/index.html',
        }),
    ],

    resolve: {
        modules: [
            path.resolve('./src/js'),
            path.resolve('./node_modules')
        ]
    },

    devServer: {
        contentBase: '.',
        historyApiFallback: true, // For ReactRouter
    },

    stats: {
        colors: true
    },

    devtool: !isDebug ? "" : isProd ? 'hidden-source-map' : 'cheap-eval-source-map',
};
