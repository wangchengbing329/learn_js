const http = require ('http');
/**
 * 方式一
 */
// http.createServer((req,res)=>{
//     res.writeHead(200,{
//         'Content-type':'text/plain'
//     })
//     res.end('123')
// }).listen(3000);
// console.log('Server is running in 3000')


// 方式二

function foo(req,res){
    res.writeHead(200,{'Content-type':'text/plain'});
    res.end('happy')
}
http.createServer(foo).listen(3000);
console.log('Server is running in 3000')