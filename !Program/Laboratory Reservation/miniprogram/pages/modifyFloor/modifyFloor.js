
import Toast from '../../miniprogram_npm/@vant/weapp/toast/toast';
import Dialog from '../../miniprogram_npm/@vant/weapp/dialog/dialog';
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
    activeNames:['1'],
    show:false,
    actions:[],
    floorInfo:[],
    newIndex:0
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
  handleShow(){
    this.setData({
      show:true
    })
  },
  return(){
    wx.switchTab({
      url: '/pages/index/index'
    })
  },
  delete(e) {
    const {index} = e.currentTarget.dataset;
    let {not_classRoom} = this.data;
    const that = this;
    Dialog.confirm({
      title:'删除',
      message:`确认删除教室${index + 1}`
    }).then(()=>{
      not_classRoom.splice(index,1);
      that.setData({
        not_classRoom
      },()=>{
        Dialog.close()
      })

    }).catch(()=>{
      Dialog.close()
    }
    )
  },
  submitFloorInfo(){
    let {not_classRoom,floor_name,floor_num,floor_roomNum, newIndex,floorInfo } = this.data;
    console.log(not_classRoom,floor_name,floor_num,floor_roomNum)
    let isNullInfo = not_classRoom.some(item=>{
      return (item.selectedClassRoom === '' || item.selectedFloor === '')
    })
    let _id = floorInfo[newIndex]._id;
    console.log(_id, '')
    floor_num = parseInt(floor_num);
    floor_roomNum=parseInt(floor_roomNum)
    let not_classRoomCopy = [] 
    not_classRoom.map(item => {
      not_classRoomCopy.push({
        selectedFloor: parseInt(item.selectedFloor),
        selectedClassRoom:parseInt(item.selectedClassRoom)
      })
    })
    if (!floor_name || !floor_num || !floor_roomNum || isNullInfo) {
      Toast('请完善所有信息');
    } else {
      wx.cloud.callFunction({
        name: 'modifyFloor',
        data: {
          floor_num,
          floor_name,
          floor_roomNum,
          not_classRoom:not_classRoomCopy,
          _id
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
  onClose(){
    this.setData({
      show:false
    })
  },
  onSelect(e){
    console.log(e)
    let { name } = e.detail;
    console.log(name, '')
    let {actions,floorInfo} = this.data;
    console.log(actions, '')
    let newIndex;
    for (let index in actions) {
      if (actions[index].name === name) {
        newIndex = index
      }
    }
    this.setData({
      newIndex
    })
    this._initFloorInfo();
  },
  _initFloorInfo(){
    let { newIndex,floorInfo } = this.data;
    this.setData({
      floor_name:floorInfo[newIndex].floor_name,
      floor_num:floorInfo[newIndex].floor_num,
      floor_roomNum:floorInfo[newIndex].floor_roomNum,
      not_classRoom:floorInfo[newIndex].not_classRoom
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  _initModifyFloorData(){
    const that = this;
    wx.cloud.callFunction({
      name:'floorInfo'
    }).then(res => {

      const { floorInfo } = res.result;
      console.log(floorInfo);
      let newAction = [];

      for (let item of floorInfo) {
        newAction.push({
          name: item.floor_name
        })
      }
      that.setData({
        actions:newAction,
        floorInfo
      })
      return newAction
    }).then(res => {
      this._initFloorInfo()
    })
  },
  onLoad: function (options) {
    this._initModifyFloorData()
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