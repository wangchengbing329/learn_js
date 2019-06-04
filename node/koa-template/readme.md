 ## koa 中间件 middleWare 
 app.use(middleWare);
 next 下一个中间件
 每一次use都会注册一个中间件
 [middleWare1,middleWare2]
 1. async 函数 
 2. 洋葱模型：一层一层往最里面执行，最后一个中间件执行完了，一层一层往外冒泡执行剩余的代码。
 3. 解耦：每一个中间件负责一件事。
 以 X 开头的：自定义响应头
 ## koa 第三方中间件
 koa ctx 就是 req + res 组成的对象
 接着扩展 ctx 接着往ctx 上塞 东西
 ctx；{
     req:{},
     res:{}
     ,

 }
 koa-views
 ctx；{
     req:{},
     res:{},
     render:()=>{

     }
     

 }
 ## 
 package.json 项目描述
 依赖 npm install 下来的文件。
  -S 往 package.json 里面的 dependencies 存放版本号和名字
  npm i node_modules 目录。
  koa 压缩一下 ->20 500M 
  不把 node_modules 放在压缩目录里面 5M -> 
  npm i  从package.json 文件里面读取依赖 安装依赖
  -S 
## ejs
<%= %> 原样输出
<%- %> 解析 html
<% %> 解析 JS 