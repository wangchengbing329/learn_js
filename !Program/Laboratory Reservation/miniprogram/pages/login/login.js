// miniprogram/pages/login/login.js
const app =  getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    nickname: '给自己一个微笑',
    openid: '',
    avatar: '',
    loginCode: ''
  },
  handleGetUserInfo (e) {
    console.log(e);
    app.globalData.userInfo = e.detail.userInfo;
    console.log(app.globalData);
    // if (e.detail.userInfo) {
      wx.cloud.callFunction({
        name: 'regeist',
        data: {userInfo:app.globalData.userInfo} 
      }).then(res => {
        console.log(res);
        if (res.result.ret_code === '201') {
          this.handleGetUserInfo();
        } else if (res.result.ret_code === '200') {
          if (info.role === 1) {
            wx.setTabBarItem({
              index: 0,
              text: '用户首页',
              iconPath: 'images/index.png',
              selectedIconPath: 'images/index_active.png',
            });
            setTimeout( ()=> {
              wx.switchTab({
                url: 'pages/user/index'
              })
            },2000)
          } else if(info.role === 0) {
            wx.setTabBarItem({
              index: 0,
              text: '管理员首页',
              iconPath: 'images/index.png',
              selectedIconPath: 'images/index_active.png'
            })
            setTimeout(()=> {
              wx.switchTab({
                url: 'pages/admin/index'
              })
            })
          }
        }
      })
      
    // }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
 
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})