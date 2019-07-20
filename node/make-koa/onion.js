const Koa = require ('koa')
const app = new Koa();
app.use(async(ctx)=>{
console.log(1);
await next();
console.log(2);
})
app.use(async(ctx)=>{
ctx.body = '123';
console.log(1223);
})
app.listen(3003)