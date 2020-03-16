// miniprogram/pages/editRole/editRole.js
import Toast from '../../miniprogram_npm/@vant/weapp/toast/toast'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    radioList:['管理员','用户'],
    roleId: '',
    result:0
  },
  inputRoleid(e){
    this.setData({
      roleId:e.detail
    })
  },
  changeRole(e) {
    console.log(e)
    this.setData({
      result:e.detail
    })
  },
  onSelect(e){
    const { name } = e.currentTarget.dataset;
    this.setData({
      result:name
    })
  },
  return() {
    wx.navigateBack({
      delta: 1, // 回退前 delta(默认为1) 页面
    })
  },
  submitRoleInfo() {
    const that = this;
    const { roleId, result } = this.data;
    console.log(typeof(roleId),typeof(result.toString()));

    wx.cloud.callFunction({
      name: 'submitRole',
      data: {
        roleId,
        role:result.toString()
      }
    }).then(res => {
      const {ret_code} = res.result;
      if (ret_code === 404) {
        Toast('用户未找到，请检查输入或确保该用户信息完整')
      } else if(ret_code === 201) {
        Toast.success('修改成功')
        wx.switchTab({
          url: '/pages/index/index'
        })
      } else if(ret_code === 403) {
        Toast.fail('修改失败')
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