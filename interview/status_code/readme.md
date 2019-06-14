HTTP  req res 
协议状态码：包含关系  HTTP响应（response）中包含状态码 主要告诉客户端 服务器处理的情况
http 协议包含状态码
浏览器 代理 proxy
1XX 以1开始是表示请求正在处理，继续等待 
2xx 请求已经处理掉了 200  OK
3XX 重定向 Location 
4XX 用户出现错误（地址错了） 未授权限 受限资源 404 not found 
5xx 服务器端出现错误



## 301 
永久跳转
用户 www.xioami.com  www.mi.com
告诉 蜘蛛
www.xioami.com /a.html 红米手机
废弃了， 301 www.mi.com/a.html 
3xx 区别， 永久跳转 ，告诉蜘蛛把记录更新掉 
301 可以在改变状态码后，不变 来展示理解
http://localhost:3000 301 永久跳转，再次访问的时候，浏览器有缓存，不需要再走服务器了，
## 302 临时性跳转 不会在缓存 不会告知蜘蛛 或在前端缓存

