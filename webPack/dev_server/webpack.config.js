const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtracTextPlugin = require('extract-text-webpack-plugin')
const path = require('path');
module.exports = {
    entry: './src/index',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    }, 
    module: {
        rules: [
            {
                test: /\.js$/,
                include: [
                    path.resolve(__dirname, 'src')
                ],
                use: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: ExtracTextPlugin.extract({
                    fallback:'style-loader',
                    use:[
                        'css-loader'
                        
                    ]
                })
            },{
                test:/\.less$/,
                use: ExtracTextPlugin.extract({
                    fallback:'style-loader',
                    use:[
                        'css-loader',
                        'less-loader'
                    ]
                })
            }
        ]   
    },
    resolve: {
        extensions: ['.js','.css','.less'],
        modules: [
            path.resolve(__dirname, 'node_modules')
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({ 
            filename: 'index.html',
            template: 'src/index.html'
        }),
        new ExtracTextPlugin('[name].css')
    ]
}
