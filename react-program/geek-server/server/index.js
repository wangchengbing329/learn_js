const Koa = require('koa');
const mongoose = require('mongoose');
const bodyParser = require('koa-bodyparser');
const cors = require('koa2-cors')
const Koarouter = require('koa-router')


const courseRoute = require('../db/router/courseRoute')
const mineRoute = require('../db/router/mineRoute')
const {connect} = require('../db/db.init');
const {initSchema} = require('./server.init')
const app = new Koa();
const router = new Koarouter();
app.use(bodyParser())
app.use(cors());

router.use('/course',courseRoute.routes())
router.use('/mine',mineRoute.routes())
         
app.use(router.routes())
app.use(router.allowedMethods())
              
 
;(async ()=>{
 await connect();
  initSchema()
})()

app.use(async (ctx)=>{
  ctx.body = 'hello'
})
app.listen(3001,()=>{
  console.log('a server is running on port 3001')
})