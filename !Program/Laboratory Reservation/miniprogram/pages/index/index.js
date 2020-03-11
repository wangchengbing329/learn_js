// miniprogram/pages/user/order/user_order.js
import Toast from '../../@vant/weapp/toast/toast';

const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isUser: false,
    activeNames:['0'],
    orderList: [],
    /**
     * ! 这里应当重新设计，需要专门设置标题字段，内容
     */
    notice_tips:['       老师好','同学们好'],
    open_id: 'myyan222',
    nickname: '给自己一个微笑'
  },
  changeList(e) {
    this.setData({
      activeNames:e.detail
    })
  },
  handleCancelOrder(e) {
    const that = this;
    const {id} = e.currentTarget.dataset;
    wx.cloud.callFunction({
      name:'cancelOrder',
      data: {
        _id:id
      }
    }).then(res => {
      if (res.result.ret_code === 200) {
        Toast.success('取消预定成功');
        that._initUserIndexData();
      } else {
        Toast.fail('取消预定失败');
      }
    })
  },
  handleModifyOrder(e) {
    let { order }  = e.currentTarget.dataset;
    delete order.room_num;
    console.log(order);
    wx.setStorage({
      key: 'orderInfo',
      data: order,
      success: function(res){
        // success
        wx.redirectTo({
          url: '/pages/user/reserve/reserve'
        })
      }
    })
  },
  /**
   * todo 初始化用户首页数据
   */
  _initUserIndexData() {
    const that = this;
    wx.cloud.callFunction({
      name: 'searchOrder'
    }).then(res => {
      const { orderList } = res.result;
      console.log(orderList)
      let newOrderList = [{
        title: '预定申请',
        orderInfo:[]
      },{
        title: '已完成预定',
        orderInfo:[]
      }]
      for (let item of orderList) {
        if (item.isSolved === 1) {
          newOrderList[1].orderInfo.push({
            floor_name:item.floor_name,
            id:item._id,
            day:item.selectedRoom.day,
            month:item.selectedRoom.month + 1,
            year:item.selectedRoom.year,
            room_num: item.selectedRoom.selectedClassRoom < 10 
                      ? item.selectedRoom.selectedFloor + '0' + item.selectedRoom.selectedClassRoom
                      : + item.selectedRoom.selectedFloor + '' + item.selectedRoom.selectedClassRoom,
            selectedClassRoom:item.selectedRoom.selectedClassRoom,
            selectedFloor:item.selectedRoom.selectedFloor,
            class_id: item.selectedRoom.class_id
          })
        } else {
          newOrderList[0].orderInfo.push({
            floor_name:item.floor_name,
            id:item._id,
            day:item.selectedRoom.day,
            month:item.selectedRoom.month + 1,
            year:item.selectedRoom.year,
            room_num: item.selectedRoom.selectedClassRoom < 10 
                      ? item.selectedRoom.selectedFloor + '0' + item.selectedRoom.selectedClassRoom
                      : + item.selectedRoom.selectedFloor + '' + item.selectedRoom.selectedClassRoom,
            selectedClassRoom:item.selectedRoom.selectedClassRoom,
            selectedFloor:item.selectedRoom.selectedFloor,
            class_id: item.selectedRoom.class_id

          })
        }
      }
      that.setData({
        orderList: newOrderList
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
    this._initUserIndexData();
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