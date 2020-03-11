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
    wx.cloud.callFunction({
      name: 'regeist',
      data: {},
    }).then(res => {
      console.log(res.result.role)
      wx.setStorage({
        key: 'role',
        data: res.result.role
      })
      if(res.result) {
        wx.showLoading({
          title: '登陆中...',
          mask: true
        });
        setTimeout(()=>{
          wx.hideLoading();
          wx.switchTab({
            url: '../index/index'
          })
        },2000)
      }
    })
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