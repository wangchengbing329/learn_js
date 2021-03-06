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
    eventsList: [],
    adminActiveNames:[1],
    isAganist:false,
    noticeTips:[],
    current:0,
    noticeShow:false
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
  changeOrderList(e) {
    this.setData({
      adminActiveNames: e.detail
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
        if (item.isSolved !== 0) {
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
            class_id: item.selectedRoom.class_id,
            isSolved:item.isSolved
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
            class_id: item.selectedRoom.class_id,
            isSolved:item.isSolved

          })
        }
      }
      that.setData({
        orderList: newOrderList
      })
    })
  },
  _initNotice(){
    const that = this;
    wx.cloud.callFunction({
      name:'getNoticeInfo'
    }).then(res => {
      const {noticeList} = res.result;
      let newNoticeList = []; 
      noticeList.map(item => {
        newNoticeList.push(item.notice)
      })
      that.setData({
        noticeTips:newNoticeList
      })
    })

  },
  onEditorReady(e) {
    const that = this;
    const {index} = e.currentTarget.dataset;
    const {id} = e.currentTarget;
    wx.createSelectorQuery().select(`#${id}`).context(function (res) {
      that[`editorCtx${index}`] = res.context
    }).exec()
  },
  onSwiperChange(e){
    console.log(e)
    const {noticeTips} = this.data;
    const index = e.detail.current;
    this[`editorCtx${index}`].setContents({
      delta:JSON.parse(noticeTips[index])
    })
  },
  _initAdminIndexData(){
    const that = this;
    wx.cloud.callFunction({
      name: 'searchOrderList'
    }).then(res => {
      let { orderList } = res.result;
      console.log(orderList,'----');
      let newOrderList = []
      for (let item of orderList) {
        if ( item.isSolved === 0 ) {
          newOrderList.push({
            _id:item._id,
            floor_name:item.floor_name,
            day:item.selectedRoom.day,
            month:item.selectedRoom.month + 1,
            year:item.selectedRoom.year,
            room_num: item.selectedRoom.selectedClassRoom < 10 
                      ? item.selectedRoom.selectedFloor + '0' + item.selectedRoom.selectedClassRoom
                      : + item.selectedRoom.selectedFloor + '' + item.selectedRoom.selectedClassRoom,
            selectedClassRoom:item.selectedRoom.selectedClassRoom,
            selectedFloor:item.selectedRoom.selectedFloor,
            statusChangeTime:item.statusChangeTime,
            class_id: item.selectedRoom.class_id
          })
        }
      }
      that.setData({
        eventsList:newOrderList
      })
    })
  },
  handleSearchReq(e) {
    const that = this;
    const { info } = e.currentTarget.dataset;
    wx.cloud.callFunction({
      name: 'isFit',
      data: {
        info
      }
    }).then(res => {
      const { ret_code } = res.result;
      if (ret_code === 200) {
        Toast('符合条件')
      } else {
        Toast('不符合条件')
        that.setData({
          isAganist:true
        })
      }
    })
  },
  handleAgreeReq(e) {
    const that = this;
    const { id } = e.currentTarget.dataset;
    const { isAganist }  = this.data;
    if (isAganist) {
      Toast('预定不符合条件，请勿违规操作')
    } else {
      wx.cloud.callFunction({
        name: 'handleOrder',
        data: {
          siteName:'agree',
          _id:id
        }
      }).then(res => {
        const { ret_code } = res.result;
        if (ret_code === 200) {
          Toast.success('处理成功')
          that._initAdminIndexData()
        } else {
          Toast.fail('操作失败，请稍后再试')
        } 
      })

    }
  },
  handleCancelReq(e) {
    const that = this;
    const { id } = e.currentTarget.dataset;
    const { isAganist }  = this.data;
    wx.cloud.callFunction({
      name:'handleOrder',
      data: {
        _id:id,
        siteName: 'reject'
      }
    }).then(res => {
      const { ret_code } = res.result;
      if (ret_code === 200) {
        Toast.success('处理成功');
        that._initAdminIndexData();
        that.setData({
          isAganist:false
        })
      } else {
        Toast.fail('操作失败，请稍后再试')
      }
    })
  },
  solveSite() {

  },
  handleEditNotice() {
    wx.navigateTo({
      url: '/pages/editor/editor',
    })
  },
  handleEditRole() {
    wx.navigateTo({
      url: '/pages/editRole/editRole',
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
  handleEditFloor(){
    wx.navigateTo({
      url: '/pages/editFloor/editFloor',
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
  handleModifyFloor(){
    wx.navigateTo({
      url: '/pages/modifyFloor/modifyFloor',
      success: (result)=>{
        
      },
      fail: ()=>{},
      complete: ()=>{}
    });
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options, '')
    let role = wx.getStorageSync('role')
    console.log(role)
    if (role === '1') {
      this.setData({
        isUser:true
      })
      this._initUserIndexData();
      this._initNotice()
      
    } else if(role === '0'){
      this.setData({
        isUser : false
      })
      this._initAdminIndexData();
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
    // let chageStatus = setTimeout(()=> {
    //   this.setData({
    //     noticeShow:true
    //   })
    // },3000)
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

    let role = wx.getStorageSync('role')
    console.log(role)
    if (role === '1') {
      this.setData({
        isUser:true
      })
      this._initUserIndexData();
      this._initNotice()
    } else if(role === '0'){
      this.setData({
        isUser : false
      })
      this._initAdminIndexData();
    }
    
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