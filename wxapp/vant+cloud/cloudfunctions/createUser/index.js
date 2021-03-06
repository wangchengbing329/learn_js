// 云函数入口文件
const cloud = require('wx-server-sdk')
const env = 'wcb-1a4bp'

cloud.init()
const db = cloud.database({env})
// 云函数入口函数
exports.main = async (event, context) => {
 const userInfo = event.userInfo
//  先查询有无用户id
const checkUser= await db.collection('user').where({
  openId:userInfo.openId
})
.get()
// 如果有用户则更新基本用户信息
if(checkUser.data.length>0){
  await db.collection('user').doc(checkUser.data[0]._id).update({
    data:{
      avatarUrl:event.avatarUrl,
      nickName:event.nickName,
      sex:event.sex
    }
  })

}else{
  const inserResult=await db.collection('user').add({
    data:{
    avatarUrl:event.avatarUrl,
    nickName:event.nickName,
    sex:event.sex,
    openId:event.userInfo.openId,
    createTime:new Date()
    }

  })
}

}