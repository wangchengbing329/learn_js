// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
  env: 'wcb-1a4bp'
});
const db = cloud.database({
  env: 'wcb-1a4bp'
})

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  const openid = wxContext.OPENID
  let roleInfo
  await db.collection('lr_user').where({openid}).get().then(res=> {
    roleInfo = res.data[0]
  })
  
  return {
    roleInfo
  }
}