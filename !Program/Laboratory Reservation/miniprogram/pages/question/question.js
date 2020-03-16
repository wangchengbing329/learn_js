// miniprogram/pages/question/question.js
import Toast from '../../miniprogram_npm/@vant/weapp/toast/toast'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: '',
    content: ''
  },
  titleChange(e) {
    this.setData({
      title: e.detail
    })
  },
  contentChange(e){
    this.setData({
      content: e.detail
    })
  },
  onSubmitQuestion() {
    const { title,content } = this.data;
    console.log(title,content)
    if ( !title || !content ) {
      Toast('请完善反馈信息！')
    } else {
    wx.cloud.callFunction({
      name: 'submitQuestion',
      data: {title,content}
    }).then(res => {
      const {ret_code} = res.result;
      if (ret_code === 200) {
        Toast.success('反馈成功')
        setTimeout(()=> {
          wx.switchTab({
            url: '/pages/mine/mine'
          })
        },2000)
      } else {
        Toast.fail('反馈失败')
      }
    })}
  },
  cancelQuestion(){
    wx.navigateBack({
      delta: 1, // 回退前 delta(默认为1) 页面
      success: function(res){
        // success
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
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