// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
  env: 'wcb-1a4bp'
});
const db = cloud.database({
  env: 'wcb-1a4bp'
})

// 云函数入口函数
const _ = db.command
exports.main = async (event, context) => {
  const { siteName, _id } = event;
  let solveCode, ret_code;
  if (siteName === 'reject') {
    solveCode = 1
  } else if ( siteName === 'agree')  {
    solveCode = 2
  } 
  await db.collection('lr_order').doc(_id).update({
    data: {
      isSolved:_.set(solveCode)
    }
  }).then(res => {
    if (res) {
      ret_code = 200
    } else {
      ret_code = 404
    }
  })
  return {
    ret_code
  }
}