'use strict';

const path = require('path');

const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');

const SRC_PATH = path.resolve(__dirname, 'src');
const BUILD_PATH = path.resolve(__dirname, 'build');

module.exports = {
    context: SRC_PATH,
    entry: {
        index: './js/index.js',
        chat_list: './js/chat_list.js'
        
    },
    output: {
        path: BUILD_PATH,
        publicPath: '',
        filename: 'scripts/[name].bundle.js',
        chunkFilename: '[name].bundle.js'
        //filename: 'bundle.js'
    },
    module: {
        strictExportPresence: true,
        rules: [
            {
                test: /\.js$/,
                include: SRC_PATH,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env']
                        },
                    },
                ],
            },
            {
                test: /shadow\.css$/,
                include: SRC_PATH,
                use: [
                    {
                        loader: 'css-loader'
                    },
                ],
            },
            {
                test: /index\.css$/,
                include: SRC_PATH,
                use: [
                    {
                        loader: MiniCSSExtractPlugin.loader,
                    },
                    {
                        loader: 'css-loader',
                    },
                ],
            },
        ],
    },
    plugins: [
        
        new HTMLWebpackPlugin({
            filename: 'index.html',
            template: './index.html',
            chunks: ['index']
        }),
        new HTMLWebpackPlugin({
            filename: 'chat_list.html',
            template: './chat_list.html',
            chunks: ['chat_list']
        }),
        new MiniCSSExtractPlugin({
            filename: 'css/[name].css',
            chunks: ['chat_list']
       
        }),
        new MiniCSSExtractPlugin({
            filename: 'styles/[name].css',
            chunks: ['index']
        }),

    ]
};
