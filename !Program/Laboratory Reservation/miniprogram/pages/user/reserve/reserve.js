// miniprogram/pages/user/reserve/reserve.js
const app = getApp();
import Toast from '../../../@vant/weapp/toast/toast';
Page({

  /**
   * 页面的初始数据
   */ 
  data: {
    option: [
      { text: '求知楼', value: 0 },
      { text: '博文楼', value: 1 }
    ],
    value1: 0,
    floor: 0,
    selectedFloor: 0,
    selectedClassRoom:0,
    room_num:0,
    not_classRoom:[],
    floorArr:[],
    room_numArr:[],
    isShowPicker: false,
    isShowClass: false,
    currentDate:new Date().getTime(),
    minDate:new Date().getTime(),
    formatterDate: (type,value) => {
      if (type === 'year') {
        return `${value}年`
      } else if (type === 'month') {
        return `${value}月`
      } else {
        return `${value}日`
      }
      return value;
    },
    mainActiveIndex: 0,
    activeId:[],
    day:new Date().getDate(),
    month:new Date().getMonth(),
    year:new Date().getFullYear(),
    selectItems:[
      {
        text: '上午',
        disabled: false,
        children: [
          {
            text: '第一节课',
            id: 1,
            disabled: false 
          },
          {
            text: '第二节课',
            id: 2,
            disabled: false 
          },
          {
            text: '第三节课',
            id: 3,
            disabled: false 
          },
          {
            text: '第四节课',
            id: 4,
            disabled: false 
          }
        ]
      },
      {
        text: '下午',
        disabled: false,
        children: [
          {
            text: '第一节课',
            id: 5,
            disabled: false 
          },
          {
            text: '第二节课',
            id: 6,
            disabled: false 
          },
          {
            text: '第三节课',
            id: 7
          },
          {
            text: '第四节课',
            id: 8,
            disabled: false 
          }
        ]
      },
      {
        text: '晚上',
        disabled: false,
        children: [
          {
            text: '第一节课',
            id: 9,
            disabled: false 
          },
          {
            text: '第二节课',
            id: 10,
            disabled: false 
          },
          {
            text: '第三节课',
            id: 11,
            disabled: false 
          },
          {
            text: '第四节课',
            id: 12,
            disabled: false
          }
        ]
      }
    ]
  },
  _initFloorInfo() {
    const that = this;
    let { year, month, day, selectItems } = this.data;
    wx.cloud.callFunction({
      name: 'floorInfo',
      data: {}
    }).then(res => {
      const { floorInfo } = res.result;
      console.log(floorInfo)
      let { value1, option} = this.data;
      let floor_name;
      for (let item of option) {
        if (item.value === value1) {
          floor_name = item.text
        }
      }
      for (let item of floorInfo) {
        if (item.floor_name === floor_name) {
          that.setData({
            floor:item.floor_num,
            room_num:item.floor_roomNum,
            not_classRoom: item.not_classRoom
          })
          that.getRoomId();
        }
      }
    })
  },
  /**
   * todo 可以优化
   */
  getRoomId() {
    let that = this; 
    let floorArr = [],
    room_numArr = [];
    for (let i = 1; i <= that.data.floor; i++ ) {
      floorArr.push(i);
    }
    for (let j = 1; j <= that.data.room_num; j++) {
      room_numArr.push(j);
    }
    that.setData({
      floorArr,
      room_numArr
    })
  },
  /**
   * 
   * @description 打开时间段选择
   */
  handleSelectClassRoom(e) {
    const oldSelectedFloor = JSON.parse(JSON.stringify(this.data.selectedFloor));
    const oldSelectedClassRoom = JSON.parse(JSON.stringify(this.data.selectedClassRoom));
    console.log(e);
    let not_classRoom = this.data.not_classRoom;
    let { room, floor} = e.currentTarget.dataset;
    if (not_classRoom.length !== 0) {
      for (let item of not_classRoom) {
        console.log(item);
        if (item.selectedClassRoom === room && item.selectedFloor === floor) {
          this.setData({
            isShowClass: false
          })
        } else {
          this.setData({
            isShowClass:true
          })
        }
      }
    } else {
      this.setData({
        isShowClass:true  
      })
    }
    // console.log(oldSelectedFloor,oldSelectedClassRoom)
    // console.log(room, floor);
    // console.log(this.data.activeId)
    if (oldSelectedClassRoom !== room || oldSelectedFloor !== floor ) {
      this.setData({
        activeId: [],
        selectedFloor: floor,
        selectedClassRoom:room
      })
    }
    console.log(this.data.activeId)
  },
  showDatePicker() {
    this.setData({
      isShowPicker: true
    })
  },
  onClosePicker(e){
    console.log(1111);
    let { year, month, day } = this.data;
    const oldYear = JSON.parse(JSON.stringify(year));
    const oldMonth = JSON.parse(JSON.stringify(month));
    const oldDay = JSON.parse(JSON.stringify(day));
    let newYear  = new Date(e.detail).getFullYear();
    let newMonth  = new Date(e.detail).getMonth();
    let newDay  = new Date(e.detail).getDate();
    if (oldDay !== newDay || oldMonth !== newMonth || oldYear !== newYear) {
      this.setData({
        activeId: []
      })
    }
    this.setData({
      isShowPicker:false,
      year:newYear,
      month:newMonth,
      day:newDay
    })
  },
  onCancelPicker() {
    this.setData({
      isShowPicker:false
    })
  },
  /**
   * @description 关闭上课时间段选择
   */
  onCloseClass() {
    this.setData({
      isShowClass:false
    })
  },

  /**
   * @description 点击选择上午，下午，晚上
   */
  onClickNav({detail = {}}){
    // console.log(detail)
    this.setData({
      mainActiveIndex:detail.index || 0
    })

  },
  /**
   * 
   * @description 点击选择第几节课 
   */
  onClickItem({detail = {}}) {
    // console.log(detail);
    const {activeId} = this.data;
    const index =activeId.indexOf(detail.id);
    if (index > -1) {
      activeId.splice(index,1);
    } else {
      activeId.push(detail.id)
    }
    this.setData({
      activeId
    })
  },
  /**
   * @description 选择实验楼
   * @param {*} e 
   */
  handleSelectExperiment(e) {
    let { value1 } = this.data;
    const oldExperiment = JSON.parse(JSON.stringify(value1));
    if (oldExperiment !== e.detail) {
      this.setData({
        activeId: []
      })
    }
    this.setData({
      value1:e.detail
    })
    this._initFloorInfo();
    console.log(this.data.value1)
  },
/**
 * todo 初始化预定页的数据，后面会经过多次调用
 * todo 需要数据库的以下字段
 * ? floor_num room_num floor_name selected_room(在下面会给红色背景的) not_classRoom class_id day year month room_num
 * @param {*} options 
 */
goBack() {
  wx.switchTab({
    url: '/pages/index/index'
  });
},
/**
 * todo 提交的时候要进行验证
 * ? 1. 判断选择时间段是否选择  activeId 是否为空
 * todo 传入的相应的字段
 * ? activeId, year, month, day, room_num 
 */
submit() {
  let { activeId, year, month, day, selectedClassRoom, selectedFloor, value1, option } = this.data;
  let room_num = selectedClassRoom < 10
                    ? selectedFloor + '0' + selectedClassRoom
                    : selectedFloor + '' + selectedClassRoom

  if (activeId.length !== 0) {
    let isAllow =  activeId.reduce((prev,next) => {
      return prev - next
    })
    const isAllowNum = isAllow + activeId.length
    if (isAllowNum !== 1) {
      Toast('请选择正确的时间段')
    }  
  } else {
    Toast('请选择时间段');
  }
  
  if(selectedClassRoom === 0 ) {
    Toast('请选择教室')
  }
  let floor_name ;
  for (let item of option) {
    if (item.value === value1) {
      floor_name = item.text
    } 
  } 
  console.log(floor_name)
  wx.cloud.callFunction({
    name: 'submitOrder',
    data: {
      business_code: 'submit',
      room_num: parseInt(room_num),
      year,
      month,
      day,
      class_id:activeId,
      floor_name
    }
  }).then (res => {
    console.log(res)
  })
},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this._initFloorInfo()
    // console.log(this.data.floorArr,this.data.room_numArr);
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