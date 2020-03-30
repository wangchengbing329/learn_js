// miniprogram/pages/mine/mine.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    avatar: '',
    nickname: '',
    infoNum:'',
    functionList:[],
    text:'如果出现数据更新不及时状况，请退出重新登陆'
    
  },
  searchUnread() {
    const that = this;
    wx.cloud.callFunction({
      name: 'searchUnread'
    }).then(res => {
      console.log(res)
    const { unReadList } = res.result;
    if (unReadList.length === 0) {
      that.setData({
        infoNum: null
      }) 
    } else {
      console.log(unReadList.length)
      that.setData({
        infoNum: unReadList.length
      })
    }
    })
    
  },
  goToCatePage(e) {
    let {page} = e.currentTarget.dataset;
    
    if (page === 'message') {
      wx.redirectTo({
        url: `/pages/${page}/${page}`,
        success: function(res){
          // success
          wx.cloud.callFunction({
            name: 'changeRead'
          }).then(resp => {
            const { ret_code } = resp.result;
            if (ret_code === 200 ) {
              this.searchUnread()
            }
          })
        }
      })
    } else {
      wx.navigateTo({
        url: `/pages/${page}/${page}`
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const adminFunctionList = [
      {
        icon: 'manager-o',
        name: '个人信息',
        page: 'selfInfo',
      },{
        icon: 'question-o',
        name: '反馈列表',
        page: "questionShow"
      }, {
        icon: 'info-o',
        name: '关于',
        page: 'desc'
      }, {
        icon: 'logistics',
        name: '退出',
        page: 'login'
      }
    ],userFunctionList = [
      {
        icon: 'manager-o',
        name: '个人信息',
        page: 'selfInfo',
      }, {
        icon: 'comment-circle-o',
        name: '信息',
        page: 'message',
      },{
        icon: 'question-o',
        name: '反馈',
        page: "question"
      }, {
        icon: 'info-o',
        name: '关于',
        page: 'desc'
      }, {
        icon: 'logistics',
        name: '退出',
        page: 'login'
      }
    ];
    const userInfo = wx.getStorageSync('userInfo');
    const role = wx.getStorageSync('role');
    if (role === '1') {
      this.setData({
        nickname: userInfo.nickName,
        avatar: userInfo.avatarUrl,
        functionList: userFunctionList
      })
      this.searchUnread();
    } else if (role === '0') {
      this.setData({
        nickname: userInfo.nickName,
        avatar: userInfo.avatarUrl,
        functionList: adminFunctionList
      })
    }
    console.log(userInfo);
  },
  goToEdit (e) {
    console.log(e);
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
    console.log(11111)
    this.searchUnread();
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
    // console.log('hide')
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    // console.log('unload')
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    this.searchUnread()
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