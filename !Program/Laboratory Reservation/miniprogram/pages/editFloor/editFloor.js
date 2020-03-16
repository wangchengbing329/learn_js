// miniprogram/pages/editFloor/editFloor.js
import Toast from '../../miniprogram_npm/@vant/weapp/toast/toast';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    floor_name: '',
    floor_num: '',
    floor_roomNum:'',
    not_classRoom:[
      {
        selectedClassRoom:'',
        selectedFloor:''
      }
    ],
    activeNames:['1']
  },
  isShow(e) {
    this.setData({
      activeNames: e.detail
    })
  },
  changeFloorName(e){
    this.setData({
      floor_name:e.detail
    })
  },
  changeFloorNum(e){
    this.setData({
      floor_num:e.detail
    })
  },
  changeFloorRoomNum(e){
    this.setData({
      floor_roomNum:e.detail
    })
  },
  handleNonFloor(e) {
    console.log(e)
    const { index } = e.currentTarget.dataset;
    let floor = 'not_classRoom['+ index+'].selectedFloor'
    this.setData({
      [floor]: e.detail
    })
  },
  handleNonRoomNum(e){
    // console.log(e)
    const { index } = e.currentTarget.dataset;
    let room = 'not_classRoom['+ index+'].selectedClassRoom'
    this.setData({
      [room]: e.detail
    })
  },
  addFloor(){
    let {not_classRoom} = this.data;
    console.log(not_classRoom)
    let newClassRoom = {
      selectedClassRoom:'',
      selectedFloor:''
    }
    not_classRoom.push(newClassRoom)
    this.setData({
      not_classRoom
    })
  },
  return(){
    wx.switchTab({
      url: '/pages/index/index'
    })
  },
  submitFloorInfo(){
    let {not_classRoom,floor_name,floor_num,floor_roomNum} = this.data;
    console.log(not_classRoom,floor_name,floor_num,floor_roomNum)
    let isNullInfo = not_classRoom.some(item=>{
      return (item.selectedClassRoom === '' || item.selectedFloor === '')
    })
    floor_num= parseInt(floor_num);
    floor_roomNum=parseInt(floor_roomNum)
    let not_classRoomCopy = [] 
    not_classRoom.map(item => {
      not_classRoomCopy.push({
        selectedFloor: parseInt(item.selectedFloor),
        selectedClassRoom:parseInt(item.selectedClassRoom)
      })
    })
    if (!floor_name || !floor_num || !floor_roomNum || isNullInfo) {
      Toast('请完善所有信息')
    } else {
      wx.cloud.callFunction({
        name: 'submitFloorInfo',
        data: {
          floor_roomNum,
          floor_name,
          floor_roomNum,
          not_classRoom:not_classRoomCopy
        }
      }).then(res => {
        const {ret_code} = res.result;
        if(ret_code === 200) {
          Toast.success('提交成功')
          wx.switchTab({
            url: '/pages/index/index'
          })
        } else {
          Toast.fail('提交失败')
        }
      })
    }
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