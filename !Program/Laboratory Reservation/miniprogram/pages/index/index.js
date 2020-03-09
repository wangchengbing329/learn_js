// miniprogram/pages/user/order/user_order.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isUser: false,
    orderList: [
      {
        title: '预定申请',
        orderInfo: [{
          floor_name: '求知楼',
          room_num: '203',
          order_time: '2020-2-21'
        }]
      }, {
        title: '已完成申请',
        orderInfo: [{
          floor_name: '博文楼',
          room_num: '301',
          order_time: '2019-11-20'
        }]
      }
    ],
    /**
     * ! 这里应当重新设计，需要专门设置标题字段，内容
     */
    notice_tips:['       老师好','同学们好'],
    open_id: 'myyan222',
    nickname: '给自己一个微笑'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(app.globalData.role);
    if (app.globalData.role === '1') {
      this.setData({
        isUser:true
      })
    } else{
      this.setData({
        isUser : false
      })
    }
  },
  reserve() {
    wx.navigateTo({
      url: '../user/reserve/reserve',
      success: (result)=>{
        console.log(result)
      },
      fail: ()=>{},
      complete: ()=>{}
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