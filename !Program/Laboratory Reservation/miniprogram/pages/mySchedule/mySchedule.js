// miniprogram/pages/mySchedule/mySchedule.js
import {weekday} from '../../util';
import Dialog from '../../miniprogram_npm/@vant/weapp/dialog/dialog';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    weekDay:[],
    schedule:[],
    className:''
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
      let className = res1.enrollment + '级' + res1.profession + res1.classNum + '班'
      that.setData({
        className
      })
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
          console.log(weekDay)
          let newWeekDay = JSON.parse(JSON.stringify(weekDay))      
          scheduleInfo.forEach(item => {
            newWeekDay[item.classDay].class[item.classId + 1].className = item.className;
            newWeekDay[item.classDay].class[item.classId + 1].state = true;
          })
         
          that.setData({
            weekDay:newWeekDay,
            schedule:scheduleInfo
          })
        }
      }).catch(err => {
        console.log(err)
      })
    })
  },
  readInfo(e){
    const {index,num,state} = e.currentTarget.dataset;
    if (state) {
      const {schedule,weekDay} = this.data;
      schedule.forEach(item => {
        if (item.classDay === index && item.classId + 1 === num ) {
          let info = item.room < 10
                    ? item.floor + '0' + item.room
                    : item.floor + '' + item.room;
          Dialog.alert({
            message:item.className + '  '+ item.floorName + '  ' + info,
            closeOnClickOverlay:true,
            showConfirmButton:false
          })
        }

      })
    } else {
      return 0
    }
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