## why cookie

无状态 
## cookie
本地存储
怎么来？
1. js  document.cookie 可读可写


内容：
name:
value:
path: cookie 在哪个路径下生效 
/               /所有路径
/user             /user user以及user下面的  
/user/abc       /user/abc user/abc 以及下面的
domain:
httpOnly : true/false 如果设置为true ,就不能通过 js 获取 cookie 的值
maxAge: 在几秒之后 cookie 被删除。
koa :ms  js:s
作用范围：
 domain + path 共同决定 
 在什么域名什么路径下生效
 浏览器检查存储的 cookie ,把符合当前作用域 的发送给 服务端的
 而且 http 传输报文的大小
 secure： 安全 如果是true 只会在 https 协议下传输  值true/false 
 放在 Cookie 请求头里面发送。


用途：
状态管理，true
用户个性化设置 ， false  
规定死 发送请求
2. 服务端  通过Set-cookie 

## session 
会话 
靠后台语言自己实现的 

很多用户产生很多个session
userId 
sessionId（session 表里） 用户会话的时候，通过自己的sessionId 查询自己的状态
cookie = sessionId = id

 