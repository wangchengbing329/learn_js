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
  const {floor_name,floor_num,floor_roomNum,not_classRoom } = event;
  let ret_code;
  
  await db.collection('lr_floorInfo').add({
    data: {
      floor_name,
      floor_num,
      floor_roomNum,
      not_classRoom
    }
  }).then(res => {
    console.log(res)
    if (res.errMsg === 'collection.add:ok') {
      ret_code = 200
    } else {
      ret_code = 403
    }
  })

  return {
    ret_code
  }
}