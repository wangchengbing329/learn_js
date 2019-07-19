const Koa = require('./lib/application')
const delegaes = require('delegates')
const app = new Koa ();
app.listen(3000,()=>{
    console.log('server is running in 3000')
})
const ctx ={
    request:{
        url:'baidu.com'
    },
    response:{
        body:123
    }
}
delegaes(ctx,'request')
.access('url')
delegaes(ctx,'response')
.access('body')
// access 可读可写
console.log(ctx.url === ctx.request.url)
ctx.body = 456
console.log(ctx);