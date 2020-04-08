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
  // const wxContext = cloud.getWXContext()

  const { info } = event;
  const {class_id} = info;
  function repeate(selelectedRoom,forClassId) {
    let isRepeate;
    for (let item of forClassId) {
    isRepeate = selelectedRoom.some(item1 => {
        return item1 === item;
      })
      if (isRepeate) {
        break;
      }
    }
    return isRepeate;
  }
  let ret_code;
  let time = `${info.year}/${info.month}/${info.day} 12:00:00`;
  let orderTime = new Date(time).getTime();
  await db.collection('lr_forbidden').where({
    floor_name:info.floor_name,
    beginTime:_.lte(orderTime),
    overTime:_.gte(orderTime) 
  }).get().then(res => {
    console.log(res)
    if(res.data.length === 0) {
      ret_code = 200
    } else {
      const forbiddenInfo = res.data[0];
      let fullDayAndNotFullFloor = forbiddenInfo.forbiddenClass.every(item => {
        return item.classId.length === 0;
      })
      if (forbiddenInfo.isFullDay && forbiddenInfo.isFullFloor && forbiddenInfo.forbiddenClass.length === 0) {
        ret_code = 403
      } else if (!forbiddenInfo.isFullDay && forbiddenInfo.isFullFloor) {
      let isOk = repeate(info.class_id,forbiddenInfo.forbiddenClass[0].classId)
      if (isOk) {
        ret_code = 403
      } else {
        ret_code = 200
      }
      } else if (forbiddenInfo.isFullDay && forbiddenInfo.isFullFloor && fullDayAndNotFullFloor) {
        for (let item of forbiddenInfo.forbiddenClass) {
          if (item.floor === info.selelectedFloor && item.room === info.selectedClassRoom) {
            ret_code = 403;
            break;
          } else {
            ret_code = 200;
          }
        }
      } else if (forbiddenInfo.isFullDay && !forbiddenInfo.isFullFloor) {
        let isAllown = forbiddenInfo.forbiddenClass.some(item => {
          return item.floor === info.selectedFloor && item.room === info.selectedClassRoom && repeate(info.class_id,item.classId)
        })
        if (isAllown) {
          ret_code =403;
        } else {
          ret_code = 200;
        }
      }
    }})
    
     
     

  return {
    ret_code
  }
}