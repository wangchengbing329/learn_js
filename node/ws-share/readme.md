传统的MVC后端开发


MVVM
model page（{data:{}}）
view Template wxml
VM {{}} wx:for


MVC Model 数据库
V View 静态页面，
C Controller
 Web HTTP服务器
  
 端口？ 3000 
 Mysql 3306
webserver    80


用户  request     通过  IP+端口
Web Server Response响应 


http
.createServer(function(request,response){
request 用户 N
response 
})
.listen(8080)