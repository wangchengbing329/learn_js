const mongoose =require('mongoose');
const KoaRouter = require('koa-router');
const router = new KoaRouter();
router.get('/',async (ctx)=>{
  const Mine = mongoose.model('Mine');
  await Mine.find({"_id":"5dc3dd16bf5c1d9854e9321e"}).then(res=>{
    console.log(res)
    ctx.body={
      code:200,
      message:'查询成功',
      data:res[0].data
    }
  }).catch(err =>{
    console.log(err)
  })
})

module.exports = router