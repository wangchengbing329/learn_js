- npm run script 里的 各种工作流脚本
- 一定要在根目录
1. dev 开发时运行的脚本
2. start 启动服务器的脚本
live-server 
3. build 开发完成后 ，一键build 生成上线文件
      压缩过后的 
- webpack bundle 打包工具，一切皆可打包
 1. webpack src/index.js  dist/main.js
 2. webpack-cli 命令工具
 3. webpack-dev-server 运行webpack编译同时，启动8080 端口，web-server
 - html template 
 1. css 
 2. js 
 - resolves 里的extensions 加后缀
 module 里加rules:[
     规则
     js->babel-loader->preset-env
     css css-loader
     stylus ->stylus,
     stylus->loader
 ]
 - 一切皆可打包，打包成可运行的js
 生成的文件，最好css ,js 分家
 一个文件 http 请求
 并发多个请求 拆成少数几个文件，
 js css 分离 这是必须做的
 样式的抽离

