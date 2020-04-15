// miniprogram/pages/myLecture/myLecture.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    lectureInfo:[]
  },
  getLectures(){
    wx.cloud.callFunction({
      name:'getLectures'
    }).then(res => {
      const {lectureList} = res.result;
      console.log(res)
      console.log(lectureList)
      return lectureList
    }).then(res1 => {
      const downLoadTask = res1.map(item =>{
        console.log(item)
        return this.downLoadPromise(item.fileId)
      })
      Promise.all(downLoadTask).then(data =>{
        console.log(data)
        data.forEach((item,index) => {
          res1[index].url = item.tempFilePath 
        })
        this.setData({lectureInfo:res1})
      })
    })
  },
  downLoadPromise(fileID) {
    return wx.cloud.downloadFile({
      fileID
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getLectures();

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