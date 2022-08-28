const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const miniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {

    entry: {
        src: './src/index.js',
    },

    output: {
        path: path.join(__dirname,'./dist/'),
        filename: 'bundle.js'
    },

    plugins: [
        new htmlWebpackPlugin({
            template: './src/index.html',
        }),
        new miniCssExtractPlugin()
    ],

    module: {
        rules: [

            {
                test: /.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/env','@babel/react']
                    }
                }
            },

            {
                test: /.css$/,
                exclude: /node_modules/,
                use: [ miniCssExtractPlugin.loader ,'css-loader']
            }
        ]
    }

}