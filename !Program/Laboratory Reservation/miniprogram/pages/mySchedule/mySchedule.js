// miniprogram/pages/mySchedule/mySchedule.js
import {weekday} from '../../util';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    weekDay:[]
  },
  _initClass() {
    let weekDay = [],classTime = [];
    for (let i = 0;i<13; i++) {
      if (i === 0) {
        classTime.push({
          text: '',
          state: false
        })
      } else {
        classTime.push({
          text:`课时${i}`,
          state:false,
          className:''
        })
      }
    }
    for (let j= 0;j<8;j++) {
      if (j === 0) {
        weekDay.push({
          text: '',
          class:classTime
        })
      } else {
        weekDay.push({
          text: `周${weekday[j]}`,
          class:classTime
        })
      }

    }
    this.setData({
      weekDay
    })
  },
  _initSchedule() {
    const that = this;
    wx.cloud.callFunction({
      name:'getUserInfo'
    }).then(res => {
      const {roleInfo} = res.result;
      return roleInfo;
    }).then(res1 => {
      console.log(res1)
      wx.cloud.callFunction({
        name:'searchSchedule',
        data: {
          enrollment:res1.enrollment,
          department:res1.department,
          profession:res1.profession,
          classNum:res1.classNum  
        }
      }).then(res => {
        console.log(res)
        const {schedule} = res.result;
        let time = new Date().getTime();
        if (schedule.beginTime <= time && schedule.overTime >= time) {
          let scheduleInfo = schedule.schedule;
          let {weekDay} = that.data;
          scheduleInfo.forEach(item => {
            // let index = parseInt(item.classId) + parseInt('1');
            weekday[item.classDay].class[item.classId].className = item.className
          })
          this.setData({
            weekDay
          })
        }
      }).catch(err => {
        console.log(err)
      })
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this._initClass();
    this._initSchedule(); 
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