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
  let ret_code;
  await db.collection('lr_order').where({
    isRead:0
  }).update({
    data: {
      isRead: 1
    }
  }).then(res => {
    if (res) {
      ret_code === 200
    }
  })

  return {
    ret_code
  }
}