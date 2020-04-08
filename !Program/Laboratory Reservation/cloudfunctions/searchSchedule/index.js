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
  const {enrollment,department,profession,classNum} = event;
  let schedule;
  await db.collection('lr_schedule').where({
    enrollment,
    department,
    profession,
    classNum
  }).get().then(res => {
    console.log(res)
    if (res.errMsg === 'collection.get:ok') {
      schedule = res.data[0];
    } else {
      schedule = {}
    }
  })
  return {
    schedule
  }
}