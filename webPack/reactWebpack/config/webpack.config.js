const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
module.exports = {
    entry: './src/app.js',
    output: {
        path: __dirname + './build',
        filename: 'bundle-[hash].js'
    }, 
    devtool: process.env.NODE_ENV === 'production' ? false : 'eval-source-map',
    devServer: {
        contentBase: './build',
        host:'localhost',
        port:4005,
        inline:true,
        hot:true,
        historyApiFallback:true
    },
    module:{
      rules: [
           {
               test: /\.tsx?$/,
               use: 'ts-loader',
            //    include:'',
               exclude:/node_modules/
           },
           {
               test: /\.jsx?$|\.js$/,
               use: 'babel-loader',
               exclude:/node_modules/
           },
           {
               test:  /\.css$/,
               use: [
                   {
                       loader:'style-loader'
                   },{
                       loader: 'css-loader',
                       options: {
                           module:  true,
                           localIdentName:'[name]__[local]--[hash:base:64:5]'
                       }
                   },{
                    loader: 'postcss-loader'
                }
               ],
               exclude:/node_modules/
           }
       ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns:['./build']
        }),
       new webpack.HotModuleReplacementPlugin()
    ]

}