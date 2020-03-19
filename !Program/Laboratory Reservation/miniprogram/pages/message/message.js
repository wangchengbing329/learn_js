// miniprogram/pages/message/message.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    messageList:[]
  },
  _initMessageData() {
    const that = this;
    wx.cloud.callFunction({
      name: 'searchOrder'
    }).then(res =>{
      const {orderList} = res.result;
      console.log(orderList);
      let newOrderList = [];
      for (let item of orderList) {
        let message;
        let room = item.selectedRoom.selectedClassRoom < 10
                      ? item.selectedRoom.selectedClassRoom + '0' + item.selectedRoom.selectedFloor
                      : item.selectedRoom.selectedClassRoom + '' + item.selectedRoom.selectedFloor
        if (item.isSolved === 3) {
          message = `${item.selectedRoom.year}-${item.selectedRoom.month}-${item.selectedRoom.day} ${room} 已取消`;
        } else if (item.isSolved === 2) {
          message = `${item.selectedRoom.year}-${item.selectedRoom.month}-${item.selectedRoom.day} ${room} 已成功`
        } else if (item.isSolved === 1) {
          message = `${item.selectedRoom.year}-${item.selectedRoom.month}-${item.selectedRoom.day} ${room} 已拒绝`
        }
        let handleTime = new Date(item.statusChangeTime).toLocaleDateString()
        newOrderList.push({
          title:message,
          label:handleTime
        })
      }
      console.log(newOrderList)
      that.setData({
        messageList:newOrderList
      })
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this._initMessageData();
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