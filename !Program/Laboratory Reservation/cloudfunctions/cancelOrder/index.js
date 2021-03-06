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
  const {_id} = event;
  let ret_code
  await db.collection('lr_order').doc(_id).update({
    data: {
      isSolved:_.set(3),
      statusChangeTime:_.set(new Date().getTime() )
    }
  }).then(res => {
    if (res) {
      ret_code = 200
    } else {
      ret_code = 409
    }
  })

  return {
    ret_code
  }
}