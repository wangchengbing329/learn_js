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
  let questionList;
  await db.collection('lr_question').get().then(res => {
    console.log(res)
    questionList = res.data;
  })

  return {
    questionList
  }
}