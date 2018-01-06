'use strict';
let ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: ['./app/app.js', './app/styles/index.sass'],
    output: {
        filename: "./app.js"
    },

    module: {
        rules: [

            { // sass / scss loader for webpack
                test: /\.(sass|scss)$/,
                use: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
            },
        ]
    },

    plugins: [
        new ExtractTextPlugin({ // define where to save the file
        filename: './[name].bundle.css',
        allChunks: true,
        }),
    ],

}
