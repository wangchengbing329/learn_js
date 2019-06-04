//index.js
// 连上数据库
const db = wx.cloud.database()
// 找到userinfo表
const userInfo = db.collection('userInfo')
Page({
 
data:{
userList:[]
},
getUserInfo:function(result){
console.log(result )
// 用户 open-id 前端拿不到
// 云开发可以拿到
wx 
.cloud
.callFunction({
  name:'getOpenId',
  complete:res=>{
    // console.log(res.result.openId)
    // 云数据库中添加一条记录，传一个json ，代表一条记录，
    // 数量 不是结果是符合条件的数量
    userInfo.where({
      _openid:res.result.openId
    }).count().then(res=>{
      if(res.total == 0){
  userInfo.add({
        data:result.detail.userInfo
      })
      .then(res=>{
        console.log(res)
      })
      }else{
        // console.log('加过了')
        wx.navigateTo({
          url:'/pages/add/add'
        })
      }
    })
    console.log(result.detail.userInfo)
    
  }
})
},
onLoad:function(options){
  userInfo
  .get()
  .then(res=>{
    console.log(res, '-------');
    this.setData({
    userList:res.data
  })
  })
}
})
