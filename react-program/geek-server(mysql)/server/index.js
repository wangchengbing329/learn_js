const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const Router = require('koa-router');
const cors = require('koa2-cors')

const app = new Koa();
const router = new Router();
const {connect} = require('../db/db.init')
 
;(async ()=>{
  await connect();
})()




