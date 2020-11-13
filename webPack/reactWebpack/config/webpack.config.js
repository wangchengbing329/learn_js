const webpack = require('webpack');
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname , './build'),
        filename: 'bundle-[hash].js'
    }, 
    devtool: process.env.NODE_ENV === 'production' ? false : 'eval-source-map',
    resolve: {
        extensions: ['.js','.jsx','.ts','.tsx']
    },
    devServer: {
        contentBase: path.resolve(__dirname,'./build'),
        host:'localhost',
        port:4005,
        inline:true,
        hot:true,
        historyApiFallback:true
    },
    module:{
      rules: [
           {
               test: /\.tsx$/,
               use: 'ts-loader',
            //    include:'',
               exclude:/node_modules/
           },
           {
               test: /\.(jsx|js)$/,
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
                           modules:  {
                               localIdentName: '[path][name]__[local]--[hash:base64:5]'
                           }
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
            cleanOnceBeforeBuildPatterns:[path.resolve(__dirname,'./build')]
        }),
       new webpack.HotModuleReplacementPlugin()
    ]

}