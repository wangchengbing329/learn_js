// miniprogram/pages/schedule/schedule.js
import {weekday} from '../../util';
import Dialog from '../../miniprogram_npm/@vant/weapp/dialog/dialog';
import Toast from '../../miniprogram_npm/@vant/weapp/toast/toast';
import Notify from '../../miniprogram_npm/@vant/weapp/notify/notify';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    department:'',
    classNum:'',
    profession:'',
    beginTime:0,
    overTime:0,
    label1:'',
    label2:'',
    enrollment:0,
    enrollmentTime:'',
    showPicker1:false,
    time1:new Date().getTime(),
    minDate1:new Date().getTime()-365*24*60*60*1000,
    // 时间选择器2
    showPicker2:false,
    showDialog:false,
    time2:new Date().getTime(),
    minDate2:new Date().getTime()-365*24*60*60*1000,
    // 时间选择器3
    showPicker3:false,
    // 课程表
    weekDay:[],
    className:'',
    floorName:'',
    floor:'',
    room:'',
    schedule:[]
  },
  formateDate(timeStamp,type) {
    let year = new Date(timeStamp).getFullYear();
    let month = new Date(timeStamp).getMonth() + 1;
    let day = new Date(timeStamp).getDate();
    let date = `${year}/${month}/${day} `
    if (type === 'begin') {
      date = date + '00:00:00'
      return new Date(date).getTime();
    } else if (type === 'over') {
      date = date + '23:59:59'
      return new Date(date).getTime();
    } else {
      throw Error('type is error')
    }
  },
  handleBeginTime(){
    this.setData({
      showPicker1:true
    })
  },
  handleOverTime(){
    this.setData({
      showPicker2:true
    })
  },
  handleEnrollment() {
    this.setData({
      showPicker3:true
    })
  },
  handleSelectBegin(e){
    console.log(e)
    let begin = this.formateDate(e.detail,'begin')
    this.setData({
      showPicker1:false,
      time1:e.detail,
      label1:new Date(e.detail).toLocaleDateString(),
      beginTime:begin
    })
  },
  handleSelectOver(e) {
    let over = this.formateDate(e.detail,'over')
    this.setData({
      showPicker2:false,
      time2:e.detail,
      label2:new Date(e.detail).toLocaleDateString(),
      overTime:over
    })
  },
  handleSelectEnrollment(e){
    console.log(new Date(e.detail).toLocaleDateString())
    let year = new Date(e.detail).getFullYear();
    let month = new Date(e.detail).getMonth() + 1;
    let yearMonth = `${year}年${month}月`
    this.setData({
      showPicker3:false,
      enrollment:year,
      enrollmentTime:yearMonth
    })
  },
  handleCloseBegin(){
    this.setData({
      showPicker1:false
    })
  },
  handleCloseOver() {
    this.setData({
      showPicker2:false
    })
  },
  handleCloseEnrollment() {
    this.setData({
      showPicker3:false
    })
  },
  handleDepartment(e) {
    this.setData({
      department:e.detail
    })
  },
  handleClass(e) {
    this.setData({
      classNum:parseInt(e.detail)
    })
  },
  handleProfession(e) {
    this.setData({
      profession:e.detail
    })
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
  /**
   * todo 填写课程信息
   */
  changeClassName(e) {
    this.setData({
      className:e.detail
    })
  },
  changeFloorName(e) {
    this.setData({
      floorName:e.detail
    })
  },
  changeFloor(e){
    this.setData({
      floor:parseInt(e.detail)
    })
  },
  changeRoom(e) {
    this.setData({
      room:parseInt(e.detail)
    })
  },
  /**
   * 
   * todo 完成课程表
   */
  finishClassName(e){
    const {index,num} = e.currentTarget.dataset;
    let {schedule} = this.data;
    const that = this;
    let isExit,classInfo,indexNum;
    if (schedule.length)
    for (let item of schedule) {
      if (item.classDay === index && item.classId === num-1) {
        isExit = true;
        classInfo = item;
        console.log(classInfo)
        indexNum = schedule.findIndex(item1 => item1 === classInfo);
        break;
      } else {
        this.setData({
          floorName:'',
          className:'',
          floor:'',
          room:''
        })
      }
    } else {
      isExit = false;
    }
    if (index === 0 || num === 0) {
      Toast('请勿点击此栏')
    } else if (isExit) {
      this.setData({
        className:classInfo.className,
        floorName:classInfo.floorName,
        floor:classInfo.floor,
        room:classInfo.room
      })
      Dialog.confirm({
        title:'课程信息'
      }).then(()=> {
        let {className,floorName,floor,room} = that.data;
        if(!className || !className  ||(!floor && floor !== 0) || (!room && room !==0)) {
          console.log(className,className,floor,room)
          Notify({type:'warning',message:'请保持信息完整且正确！'})
        } else {
          console.log(className,floorName,floor,room)
          console.log(indexNum)
          schedule[indexNum]={
            classDay:index,
            classId:num - 1,
            className,
            floorName,
            floor,
            room
          }
          that.setData({
            schedule,
            className:'',
            floorName:'',
            floor:'',
            room:''
          },()=>{
            Dialog.close();
          })
        }
      }).catch(()=>{
        Dialog.close()
      })
    }else {
      Dialog.confirm({
        title:'课程信息'
      }).then(()=> {
        let {className,floorName,floor,room} = that.data;
        if(!className || !className ||!floor ||!room) {
          console.log(className,className,floor,room)
          Notify({type:'warning',message:'请保持信息完整且正确！'})
        } else {
          schedule.push({
            classDay:index,
            classId:num - 1,
            className,
            floorName,
            floor,
            room
          })
          let selected = 'weekDay['+index+'].class['+num+'].state'
          let selectedClassName = 'weekDay['+index+'].class['+num+'].className'
          that.setData({
            schedule,
            className:'',
            floorName:'',
            floor:'',
            room:'',
            [selected]:true,
            [selectedClassName]:className
          })
        }
      }).catch(()=>{

        Dialog.close()
      })
    }
  },
  /**
   * todo 提交订单
   */
  submitSchedule() {
    let {department,classNum,profession,beginTime,overTime,schedule,enrollment} = this.data;
    if (!department || !classNum ||!profession ||!beginTime || !overTime ||!schedule.length) {
      Toast('请保持课程表信息完整')
    } else {
      if (beginTime > overTime) {
        Toast('请选择正确的开始结束时间')
      } else {
      const that = this;
      wx.cloud.callFunction({
        name:'submitSchedule',
        data: {
          department,
          classNum,
          profession,
          beginTime,
          overTime,
          schedule,
          enrollment
        }
      }).then(res => {
        const {ret_code} = res.result;
        if (ret_code === 200) {
          Toast.success('设置成功')
          setTimeout(()=>{
            wx.switchTab({
              url:'/pages/mine/mine'
            })
          })
        } else if(ret_code === 403) {
          Toast.fail('请勿重复设置该班级')
        }
         else {
          Toast.fail('设置失败')
        }
      })
    }
  }
  },
  return () {
    wx.switchTab({
      url:'/pages/mine/mine'
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this._initClass()
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