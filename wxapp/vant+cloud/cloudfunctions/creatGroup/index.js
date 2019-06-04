// 云函数入口文件
const cloud = require('wx-server-sdk')
const env = 'wcb-1a4bp'

cloud.init()
// 获取服务器打得句柄 相当于数组的指针
const db = cloud.database({ env })

// 云函数入口函数
exports.main = async (event, context) => {
 const userInfo = event.userInfo
 return  await db.collection('group').add({
   data:{
     name:event.groupName,
     createBy:userInfo.openId,
     createTime:new Date(),
     deleted:false,
     updateTime:new Date(),

   }

 }) 
.then(res=>{
  return db.collection('user-group').add({
    data:{
      groupId:res._id,
      invalid:false,
      userId:userInfo.openId
    }
  })
})
}