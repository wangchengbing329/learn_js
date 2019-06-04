// pages/main/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // name:"猛哥",
    city:'南昌',
    imgUrls:[
      'https://images.pexels.com/photos/2168366/pexels-photo-2168366.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      'https://images.pexels.com/photos/2166921/pexels-photo-2166921.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      'https://images.pexels.com/photos/1820563/pexels-photo-1820563.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    ],
    item:[],
    indicatorDots:true,


    

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad  () {
    let that = this
    wx.request({
      url:'https://www.easy-mock.com/mock/5ca457ff4767c3737055c8c2/example/maoyan',
      success:function(res){
     
     that.setData({
    items:res.data.data.movieList
  })
      }
    })
    


  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log(2)

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log(3)

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log(4)

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
console.log(5)
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    console.log(6)
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log(7)

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    console.log(8)

  }
})