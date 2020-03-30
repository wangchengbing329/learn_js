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
  // const wxContext = cloud.getWXContext()
  const { info } = event;
  const {class_id} = info;
  let ret_code;
  await db.collection('lr_order').where({
    floor_name:info.floor_name,
    'selectedRoom.day': info.day,
    'selectedRoom.month': info.month,
    'selectedRoom.year': info.year,
    'selectedRoom.selectedClassRoom': info.selectedClassRoom,
    'selectedRoom.selectedFloor': info.selectedFloor,
  }).get().then(res => {
    console.log(res) 
    const infoData = res.data;
    if (infoData.length === 0) {
      ret_code = 200
    } else {
      let isRepeat;
      infoData.forEach((item,index,arr) => {
        for (let item1 of item.selectedClassRoom.class_id) {
          isRepeat = class_id.some(item2 => {
            return item1 === item2
          })
          if(isRepeat) {
            break;
          }
        }
      })
     
      if (isRepeat) {
        ret_code = 404
      } else {
        ret_code = 200
      }
    }
  })

  return {
    ret_code
  }
}