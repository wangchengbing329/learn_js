// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
  env: 'wcb-1a4bp'
});
const db = cloud.database({
  env: 'wcb-1a4bp'
})
const _ =db.command;
// 云函数入口函数
exports.main = async (event, context) => {
  let successCode;
  const wxContext = cloud.getWXContext()
  const openid = wxContext.OPENID;
  const { year, month, day, business_code, selectedFloor,selectedClassRoom,class_id,floor_name,id } = event;
  if (business_code === 'submit') {
    await db.collection('lr_order').add({
      data: {
        floor_name,
        openid,
        isSolved: 0,
        isRead:0,
        statusChangeTime:new Date().getTime(),
        selectedRoom:
          {
            year,
            month,
            day,
            selectedFloor,
            selectedClassRoom,
            class_id
          }
        
      }
    }).then(res => {
      if (res.errMsg === 'collection.add:ok')
      successCode = 200
    })
  } else if (business_code === 'modify') {
    await db.collection('lr_order').doc(id).update({
      data: {
        floor_name:_.set(floor_name),
        selectedRoom: _.set({
          year,
          month,
          day,
          selectedClassRoom,
          selectedFloor,
          class_id
        })
      }
    }).then(res => {
          if (res) {
            successCode = 201
          }
        })
  }
  return {
    successCode
  }
}