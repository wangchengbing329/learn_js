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
  const {enrollment,department,roleId,school} = event;
  let ret_code;
  await db.collection('lr_user').update({
    data: {
      enrollment:_.set(enrollment),
      department:_.set(department),
      roleId:_.set(roleId),
      school:_.set(school),
    }
  }).then(res => {
    if(res) {
      ret_code = 200
    } else {
      ret_code = 404
    }
  })

  return {
    ret_code
  }
}