const http = require('http');
// http.createServer((req,res)=>{
//     res.writeHead(200,{'Content-type':'text/html;charset =UTF-8'});
//     res.write('jintian ')
//     res.write('<br/><h1>今天号</h1>')
//     res.end()
// }).listen(3000);
const server  = http.createServer();
server.on('request',(req,res)=>{
console.log('收到请求了，url是' + req.url)
console.log('我的客户端地址是' + req.socket.remoteAddress,req.socket.remotePort);
let url = req.url;
res.writeHead(200,{'Content-type':'text/html;charset=utf-8'});
if(url === '/'){
    res.end('<h1>Index Page</h1>')
}else if(url === '/login'){
    res.end('<h1>Loginn Page</h1>')

}else {
    res.end('404 not found')
}
})
server.listen(3000,()=>{
    console.log('服务器启动成功，可以访问了')
})

