##  大前端全栈开发思路

在前端 vue 项目目录下，建一个server用来做mvc ,就好了
- 前后端分离 
后端提供/api 在server目录下
前端src/ 
后端就负责 API 服务  
1.  后端在 3000 端口 （一般）未来等着 nginx 80->3000 
/api  API服务，等着前端调用 / vue 打包好的dist 目录
index.html readFile 返回
2.  前端一般在8080  vue-router vuex axios 
3. 前后端连调， api 数据 -> vue 组件的 data
4. 跨域  前端面试的最重要的问题
domain 域名 ，
端口， cross domain 
前端不允许 安全问题 
前端考虑，页面上显示的东西要安全
后端考虑 
- 前端
book.douban.com
www.book.douban.com 不一样
subdomain:domain:port 都一样
js同源机制，
同源机制， 相同的源是值得信任的依赖的
前后端 8080:3000 跨域
不跨域 fetch('/api/user/login) 404
3000 /api/ proxy 代理
/api/匹配 
target: http://localhost:3000/api,
changeOrigin:true
发出去的请求也不跨域