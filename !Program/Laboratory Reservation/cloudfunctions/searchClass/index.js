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
  const { year, month, day, floor, cell,floor_name} = event;
  console.log(year,month,day,floor,cell,floor_name)
  let hasSelectedClass = [],scheduleId = [];

  let orderTime = `${year}/${month+1}/${day} 12:00:00`;
  let orderStamp = new Date(orderTime).getTime();
  console.log(orderStamp,orderTime)
  await db.collection('lr_schedule').where({
    beginTime:_.lte(orderStamp),
    overTime:_.gte(orderStamp)
    // 'schedule.floorName':floor_name,
    // 'schedule.floor':floor,
    // 'schedule.room':cell
  }).get().then(res => {
    if (!res.data.length) {
      scheduleId = [];
    } else {
      // console.log(res.data)
      let scheduleList = res.data;
      let scheduleClass = [];
      scheduleList.map(item => {
        scheduleClass.push(item.schedule)
      })
      console.log(scheduleClass)
      let schedule = [].concat(...scheduleClass);
      console.log(schedule)
      let scheduleFilter =  schedule.filter(item => {
        return item.floorName === floor_name && item.floor === floor && item.room === cell
      })
      if (scheduleFilter.length) {
        scheduleFilter.map(item => {
          scheduleId.push(item.classId)
        })
      }
      console.log(scheduleFilter)
    }
  })
  await db.collection('lr_order').where({
    floor_name,
    isSolved:2,
    selectedRoom: {
      year, 
      month,
      day,
      selectedFloor: floor,
      selectedClassRoom: cell
    }
  }).get().then(res => {
    let data = res.data;
    if (data.length === 0) {
      hasSelectedClass = []
    } else if (data.length === 1) {
      hasSelectedClass = data[0].selectedRoom.class_id
    } else {
    hasSelectedClass =  []
    class_idCopy = []
    console.log(data)
    data.map(item => {
      class_idCopy.push(item.selectedRoom.class_id);
    })
    console.log(class_idCopy)
    hasSelectedClass =  [].concat(... class_idCopy)
    console.log(hasSelectedClass)
    }
  })

  return {
    hasSelectedClass:hasSelectedClass.concat(scheduleId)
  }
}