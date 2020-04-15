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
  const {info} = event;
  await db.collection('lr_lecture').add({
    data:{
      ...info
    }
  }).then(res => {
    if(res.errMsg === 'collection.add:ok') {
      ret_code =200;
    } else {
      ret_code = 404;
    }
  })

  return {
   ret_code 
  }
}