const http = require('http')
const fs = require('fs')

const server = http.createServer();
server.on('request',(req,res)=>{
    res.writeHead(200,{'Content-type':'text/html;charset=utf-8'});
    let url = req.url;
    if(url === '/'){
        fs.readFile('./client.html',(err,data)=>{
            if(err){
                console.log(err)
            }
            res.end(data)
        })
    }else if(url === '/login'){
        fs.readFile('./register.html',(err,data)=>{
            if(err){
                console.log(err)
            }
            res.end(data)
        })
    }else if(url === '/login/loginout'){
        fs.readFile('./loginOut.html',(err,data)=>{
            if(err){
                console.log('你输入的地址有误，请检查后重新试试')
            }
            res.end(data)
        })
    }
    else{
        res.end('404 not Found')
    }
})
server.listen(3000,()=>{
    console.log('连接成功');
})