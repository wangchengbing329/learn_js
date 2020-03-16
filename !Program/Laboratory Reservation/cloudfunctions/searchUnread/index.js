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
  let unReadList = [];
  await db.collection('lr_order').where({
    isRead: 0
  }).get().then(res => {
    unReadList = res.data
  })

  return {
    unReadList
  }
}