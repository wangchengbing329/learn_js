const Koa = require('koa')
// 支持哪些模板引擎 
const  views = require('koa-views');
const ejs = require('ejs')
const path = require('path')
// 处理请求数据 
const koaBody = require('koa-body');
// 方便区分不通过路径
// console.log()
// const router = new Router()
const router = require('./router');
const app = new Koa();
// router.get('/user',);
// router.get('/posts',);
// 往 ctx 上面加东西
app.use(koaBody());
app.use(
    views(path.join(__dirname,'./views'),{
        extension:'ejs'
    })
)

//  /user 个人主页面
//  /post 文章详情
// app.use(async(ctx)=>{
// //  区分 页面
// //  http://localhost:8080/post
// // console.log(ctx.path)
// if (ctx.path === '/user'){
// await ctx.render('user',{user});
// }else if (ctx.path === '/posts'){
// const {id } = ctx.query;
// const post = postsDetail.find(postItem=> postItem.id ==id);
// await ctx.render('post',{post});

// }else{
//     ctx.body = '无法处理请求'
// }
// })
app.use(router.routes())
.use(router.allowedMethods())
app.listen(8080,()=>{
    console.log('server is running in 8080')
})
