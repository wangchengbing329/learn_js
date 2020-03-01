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
  const { userInfo } = event;
  const wxContext = cloud.getWXContext()
  const openid = wxContext.OPENID;
  console.log(openid)
  let ret_code, info;
  await db.collection('lr_user').where({openid}).get().then(res => {
    console.log(res);
    if (!res.data.length) {
      db.collection('lr_user').add({...userInfo,openid});
      ret_code = '201',
      info = null;
    } else {
      ret_code = '200' ;
      info = res.data[0];
    }
  })
  return {
    ret_code,
    info
  }
}