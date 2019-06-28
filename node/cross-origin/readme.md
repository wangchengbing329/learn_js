## 跨域
浏览器的安全策略，
协议 域名 端口 有一个不一致的话就存在跨域问题
https:/www.afsdf.com/a  
https:/www.afsdf.com/b

 ## 跨域的解决
 1.  cors  
 cross origin resource share 全称

 -   是一个标准，规定了一些 http 的首部字段，让服务器允许哪些网站可以访问 加在头部的
 -   规定，如果是非简单请求，浏览器会发一个预检请求，从服务器端知道是否允许跨域，如果允许 才会发出正式的请求 
 -   非简单请求 简单请求

 2. JSONP 原理
 - script 标签 可以跨域
 - 加载进来会被当做 js 执行
 - 后端 先获取到前端发出的 callback 在callback 里面  插入自己想要返回的内容
 - 前端 拿到返回的内容当做 js 执行
getUser({
    name:'abc',age:15
})


- 预先定义好一个函数
- 缺点：只能 get 请求
- 写一个promise 风格的jsonp函数 




- param = {type:'man',age:18}
 -  jsonp(url,param={}).then(res=>{
     console.log(res)
 })


 ##思路
 1. 一个全局的方法
 2. 插入一个 script 标签，根据方法名 param 拼接url 
 3. 根据js的加载情况判断请求成功与否 返回数据
 4. script 标签上有事件 