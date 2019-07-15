const path = require('path')





module.export = config
var config ={
    entry :'../src/index.js',
    output:{
        path:path.join(__dirname,'./dist/js'),
        filename:'[name].js'
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                loader:'style-loader,css-loader',
                exclude:'../node_modules/'
                
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                  presets: ['es2015','react']
                }
            }

        ]
    }
}