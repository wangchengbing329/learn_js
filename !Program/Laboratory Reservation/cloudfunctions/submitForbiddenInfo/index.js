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
  const {submitData} = event;
  let ret_code,isSubmited;
  await db.collection('lr_forbidden').where({
    floor_name:submitData.floor_name
  }).get().then(res => {
    const length = res.data.length;
    if (!length) {
      isSubmited = false;

    } else {
      let inTime = res.data.some(item => {
        return item.beginTime <= submitData.beginTime && item.overTime >= submitData.overTime
      })
      let beyondTime = res.data.some(item => {
        return item.beginTime >= submitData.beginTime && item.overTime <= submitData.overTime
      })
      let atTime = res.data.some(item => {
        return item.beginTime >= submitData.beginTime && item.overTime >= submitData.overTime && item.beginTime <= submitData.overTime
      })
      let onTime = res.data.some(item => {
        return item.beginTime <= submitData.beginTime && item.overTime <= submitData.overTime && item.oveTime >= submitData.beginTime
      })
      if (inTime || beyondTime || atTime || onTime) {
        isSubmited = true
      } else {
        isSubmited = false
      }
    }
  })
  if (!isSubmited) {
    await db.collection('lr_forbidden').add({
      data: {
        ...submitData
      }
    }).then(res => {
      console.log(res)
      if (res.errMsg === 'collection.add:ok') {
        ret_code = 200
      } else {
        ret_code = 404
      }
    })
  } else {
    ret_code = 403
  }


  return {
    ret_code
  }
}