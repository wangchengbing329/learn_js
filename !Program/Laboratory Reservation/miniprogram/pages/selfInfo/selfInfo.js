// miniprogram/pages/selfInfo/selfInfo.js
import Toast from '../../miniprogram_npm/@vant/weapp/toast/toast';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    enrollment: '',
    school:'',
    className: '',
    enrollmentMessage: '',
    studentId:'',
    schoolMessage: '',
    classMessage: '',
    isUser:true
  },
  enrollChange(e) {
    
    if (e.detail.length<4 || e.detail.length > 4) {
      this.setData({
        enrollmentMessage: '请输入正确格式的年份'
      })
    } else if (e.detail.length === 4 && parseInt(e.detail)< 2010) {
      this.setData({
        enrollmentMessage: '输入年份不能小于2010年'
      })
    } else {
      this.setData({
        enrollment: e.detail,
        enrollmentMessage: ''
      })
    }
  },
  schoolChange(e){
    this.setData({
      school:e.detail
    })
  },
  classChange(e) {
    this.setData({
      className:e.detail
    })
  },
  idChange(e) {
    this.setData({
      studentId:e.detail
    })
  },
  confirmInfo() {
    let {school,enrollment,studentId,className } = this.data;
    wx.cloud.callFunction({
      name: 'modifyUserInfo',
      data: {
        school,
        department:className,
        enrollment,
        roleId:studentId
      }
    }).then(res => {
      const { ret_code } = res.result;
      if (ret_code === 200 ) {
        Toast.success('设置成功');
        wx.switchTab({
          url: '/pages/mine/mine'
        })
      } else {
        Toast.fail('设置失败')
      }
    })
  },
  return() {
    wx.navigateBack({
      delta: 1, // 回退前 delta(默认为1) 页面
    })
  },
getUserInfo() {
  const that = this;
  wx.cloud.callFunction({
    name: 'getUserInfo'
  }).then(res => {
    const { roleInfo } = res.result;
    console.log(roleInfo)
    that.setData({
      enrollment:roleInfo.enrollment,
      school:roleInfo.school,
      studentId:roleInfo.roleId,
      className:roleInfo.department
    })
  })
},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let role = wx.getStorageSync('role')
    console.log(role)
    if (role === '1') {
      this.setData({
        isUser:true
      })
    } else{
      this.setData({
        isUser : false
      })
    }
    this.getUserInfo()
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