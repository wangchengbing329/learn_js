const mongoose = require('mongoose');
const koaRouter = require('koa-router');
const router = new koaRouter();

router.get('/',async(ctx)=>{
  const Course = mongoose.model("Course");
  function search () {
    return  Course.find({"_id" : "5dc3dcb3bf5c1d9854e93214"})
  }
  await search().then(res=>{
    console.log(res)
    ctx.body ={
      data:res[0].data
    }
  }).catch(err=>{
    console.log(err)
  })
})

module.exports =router
