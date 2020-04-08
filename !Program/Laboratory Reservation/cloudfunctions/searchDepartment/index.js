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
  const {enrollment} = event;
  let departmentList = [];
  await db.collection('lr_schedule').where({enrollment}).get().then(res => {
    console.log(res)
    const data = res.data;
    let department = [];
    let newDepartment = [];
    data.forEach(item => {
      department.push(item.department)
    })
    uniqueDepartment = Array.from(new Set(department));
    uniqueDepartment.forEach(item => {
      newDepartment.push({
        text:item,
        children:[]
      })
    })
    data.forEach((item,index) => {
      newDepartment.forEach(item1 => {
        if (item.department === item1.text) {
          item1.children.push({
            text:item.profession + item.classNum,
            id:index
          })
        }
      })
    })
    console.log(newDepartment);
    departmentList = newDepartment;

  })

  return {
    departmentList
  }
}