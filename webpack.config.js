var path = require('path');
var webpack = require('webpack');
var BUILD_DIR = __dirname + '/dist';
var SRC_DIR = __dirname + '/src';

module.exports = {
    mode: 'development',
    devServer: {
//        inline: true,
        contentBase: BUILD_DIR,
        port: 9000
    },
    devtool: 'eval-source-map',
    entry: SRC_DIR + '/index.js',
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js',
        publicPath: "/"
    },
    module: {
                   rules: [{
                           test: /\.jsx?$/,
                           exclude: /node_modules/,
                           loader: 'babel-loader',
                           query: {
                               presets: ['es2015', 'react']
                           }
                       },

                       {
                           test: /\.(css|scss)$/,
                           use: [{
                                   loader: 'style-loader'
                               },
                               {
                                   loader: 'css-loader'
                               },
                               {
                                   loader: 'sass-loader'
                               }
                           ]
                       }
                   ]

    },
    
};
