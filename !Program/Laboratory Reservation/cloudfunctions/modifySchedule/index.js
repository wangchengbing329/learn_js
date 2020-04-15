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
  let ret_code;
  const {department,beginTime,overTime,classNum,profession,schedule,enrollment} = event;
  await db.collection('lr_schedule').where({
    enrollment,
    department,
    profession,
    classNum
  }).update({
    data:{
      beginTime:_.set(beginTime),
      overTime:_.set(overTime),
      schedule:_.set(schedule)
    }
  }).then(res => {
    console.log(res)

    if (res.errMsg === 'collection.update:ok') {
      ret_code = 200
    } else {
      ret_code = 404
    }
  })

  return {
    ret_code
  }
}