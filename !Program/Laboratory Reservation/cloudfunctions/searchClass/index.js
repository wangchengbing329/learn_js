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
  const { year, month, day, floor, cell,floor_name} = event;
  console.log(year,month,day,floor,cell,floor_name)
  let hasSelectedClass;
  await db.collection('lr_order').where({
    floor_name,
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
    hasSelectedClass
  }
}