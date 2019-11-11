const mongoose = require('mongoose');
const KoaRouter = require('koa-router');
const router = new KoaRouter();
router.get('/',async(ctx)=>{
    const Discovery = mongoose.model('Discovery'); 
    await Discovery.find({ "_id" : "5dc3dcf4bf5c1d9854e93219"}).then(res=>{
        console.log(res);
        ctx.body = {
           code:200,
           data:res[0].data
        }
    }).catch(err=>{
        console.log(err)
    })  
  
  
})
module.exports = router;