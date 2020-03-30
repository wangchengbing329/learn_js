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
  let ret_code;
  const { title, content } = event;
  await db.collection('lr_question').add({
    data:{
      title,
      content,
      createTime:new Date().getTime()
    }
  }).then(res => {
    console.log(res)
    if (res) {
      ret_code = 200
    }
  })

  return {
    ret_code
  }
}