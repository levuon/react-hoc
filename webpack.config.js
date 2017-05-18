'use strict';

const path = require('path');
const webpack = require('webpack');
const fs = require('fs');

let config = {
    devtool: 'source-map',
    entry: './src/index.js',

    output: {
        path: __dirname + '/',
        filename: 'bundle.js',
        publicPath: '/'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                include: path.join(__dirname, '.', 'src')
            }, {
                test: /\.scss/,
                loader: 'style-loader!css-loader!sass-loader?outputStyle=expanded'
            }
        ]
    },
    devServer: {
        host: 'localhost',
        historyApiFallback: true,
        hot: true,
        noInfo: false,
        publicPath: '/',
        stats: {
            cached: false,
            colors: true
        }
    }
}

module.exports = config
