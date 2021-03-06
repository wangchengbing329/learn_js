// pages/mine/mine.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userNickName:"",
    userAvatar:""

  },

  /**
   * 生命周期函数--监听页面加载
   */
  order(){
    wx.navigateTo({
      url: '../orderDetail/orderDetail',
      success: (result) => {
        
      },
      fail: () => {},
      complete: () => {}
    });
      
  },

  onLoad: function (options) {
    const self =this;
    wx.getUserInfo({
      withCredentials: 'false',
      lang: 'zh_CN',
      timeout:10000,
      success: (res) => {
        self.setData({
          userAvatar:res.userInfo.avatarUrl,
          userNickName:res.userInfo.nickName
        })
      },
      fail: () => {},
      complete: () => {}
    });
      
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