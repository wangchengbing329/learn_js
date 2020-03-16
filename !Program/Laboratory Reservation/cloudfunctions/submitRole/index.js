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
  const {roleId, role } = event;
  let ret_code
  await db.collection('lr_user').where({roleId}).get().then(res => {
    const user = res.data;
    console.log(res,"1111111")
    if(user.length !== 0) {
      ret_code = 200
    } else {
      ret_code = 404
    }
  })
  console.log(ret_code)
  if(ret_code === 200) {
    await db.collection('lr_user').where({roleId}).update({
      data: {
        role:_.set(role)
      }
    }).then(res => {
      console.log(res,'22222222')
      if(res.errMsg === 'collection.update:ok'){
        ret_code = 201
      } else {
        ret_code = 403
      }
    })
  }
  console.log(ret_code)
  return {
    ret_code
  }
}