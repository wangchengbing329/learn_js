/**
 * 管理 router
 * can't find module 'XXXXXXX'
 */
const Router = require('koa-router');
const router = new Router();


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
router.get('/user',async(ctx)=>{
    await ctx.render('user',{user});
})
router.get('/posts',async(ctx)=>{
    const {id } = ctx.query;
    const post = postsDetail.find(postItem=> postItem.id ==id);
    await ctx.render('post',{post});

})
// 浏览器地址栏 get
router.get('/create',async(ctx)=>{
    await ctx.render('create');
})
// submit method ='post'
router.post('/create',async(ctx)=>{
console.log(ctx.request.body);
const {title,content} =ctx.request.body;
let id = Date.now();
user.posts.push({
    title,
    id
})
postsDetail.push({
    title,
    id
})
ctx.redirect('/user')
})

module.exports = router;
