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
  const wxContext = cloud.getWXContext()
  const openid = wxContext.OPENID;
  console.log(openid)
  let ret_code,role;
  let info = {
    school: '',
    class: '',
    enrollment: '',
    role: '1'
  }
  let a = { openid, ...info}
  console.log(a)
  let isExit = true;
  await db.collection('lr_user').where({openid}).get().then(res => {
    console.log(res);
    if (!res.data.length) {
      db.collection('lr_user').add({data:{openid,...info}}).then(resa => {
        console.log(resa + 'resa')
      }).catch(err => {
        console.log(err + 'resa')
      });
      isExit = false;
    } else {
      role = res.data[0].role
    }
  })
  if (!isExit) {
    await db.collection('lr_user').where({openid}).get().then(res => {
      console.log(res);
      role = res.data[0].role
    })
  }
  return {
    role
  }
}