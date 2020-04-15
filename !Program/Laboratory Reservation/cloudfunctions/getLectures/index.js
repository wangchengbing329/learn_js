// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
  env: 'wcb-1a4bp'
});
const db = cloud.database({
  env: 'wcb-1a4bp'
})

// 云函数入口函数
const _ = db.command;
exports.main = async (event, context) => {
  let lectureList = [];
  let now = new Date().getTime() - 30 * 24 * 60 * 60 * 1000
  await db.collection('lr_lecture').where({
    time:_.gte(now)
  }).get().then(res => {
    if(res.data.length) {
      lectureList = res.data;
    }
  })

  return {
    lectureList
  }
}