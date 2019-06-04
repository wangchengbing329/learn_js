const Koa = require('koa')
// 支持哪些模板引擎 
const  views = require('koa-views');
const ejs = require('ejs')
const path = require('path')
const app = new Koa();
const user = {
    name:'阿米达',
    posts:[
        { id:0,title:'论今天明天和后天'},
        {id:1,title:'小程序采坑指东'},
        {id:2,title:'vue.js 浅析 组建数据传递'}

    ]
}
const postsDetail =[
    {id:0,content :'今天很好，明天也很好'},
    {id:1,content:'wechat app'},
    {id:2,content:'<strong>react 表示不服</strong>'}
]
app.use(
    views(path.join(__dirname,'./views'),{
        extension:'ejs'
    })
)

//  /user 个人主页面
//  /post 文章详情
app.use(async(ctx)=>{
//  区分 页面
//  http://localhost:8080/post
// console.log(ctx.path)
if (ctx.path === '/user'){
await ctx.render('user',{user});
}else if (ctx.path === '/posts'){
const {id } = ctx.query;
const post = postsDetail.find(postItem=> postItem.id ==id);
await ctx.render('post',{post});

}else{
    ctx.body = '无法处理请求'
}
})
app.listen(8080,()=>{
    console.log('server is running in 8080')
})
