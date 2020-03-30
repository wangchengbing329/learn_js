// miniprogram/pages/user/reserve/reserve.js
const app = getApp();
import Toast from '../../../@vant/weapp/toast/toast';
import {formateFLoor,overTime} from '../../../util';
Page({

  /**
   * 页面的初始数据
   */ 
  data: {
    option: [],
    value1: 0,
    floor: 0,
    selectedFloor: 0,
    selectedClassRoom:0,
    room:'',
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
            id: 0,
            disabled: false 
          },
          {
            text: '第二节课',
            id: 1,
            disabled: false 
          },
          {
            text: '第三节课',
            id: 2,
            disabled: false 
          },
          {
            text: '第四节课',
            id: 3,
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
            id: 4,
            disabled: false 
          },
          {
            text: '第二节课',
            id: 5,
            disabled: false 
          },
          {
            text: '第三节课',
            id: 6,
            disabled:false
          },
          {
            text: '第四节课',
            id: 7,
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
            id: 8,
            disabled: false 
          },
          {
            text: '第二节课',
            id: 9,
            disabled: false 
          },
          {
            text: '第三节课',
            id: 10,
            disabled: false 
          },
          {
            text: '第四节课',
            id: 11,
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
      
        let { value1, option} = this.data;
        console.log(option, value1)
      let floor_name;
      for (let item of option) {
        if (item.value === value1) {
          floor_name = item.text
        }
      }
      // console.log(formateFLoor(option,value1))
      // let floor_name = formateFLoor(option,value1)
      console.log(floor_name)
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
  _initFloor() {
    const that = this;
    let newOption = [];
    wx.cloud.callFunction({
      name: 'floorInfo'
    }).then(res => {
      const { floorInfo } = res.result;
      console.log(floorInfo)
        floorInfo.map((item,index) => {
           newOption.push({
            text:item.floor_name,
            value:index
          })
        })
        that.setData({
          option:newOption
        })
      return newOption
    }).then(res => {
      const orderInfo =  wx.getStorageSync('orderInfo');
      if (orderInfo) {
        console.log(orderInfo)
        const { class_id ,floor_name, selectedClassRoom,selectedFloor,year,month,day} = orderInfo;
        const option = res;
        let value ;
        console.log(option,'----')
        for (let item of option) {
          if (item.text === floor_name) {
            value = item.value
          }
        }
        let currentDate = `${year}/${month}/${day} 12:00:00`
        let newRoom = selectedClassRoom <10
                        ? selectedFloor + '0' + selectedClassRoom
                        : selectedFloor + '' + selectedClassRoom
        console.log(class_id)
        that.setData({
          activeId:class_id,
          selectedFloor,
          selectedClassRoom,
          year,
          month:month -1,
          day,
          value1:value,
          room: newRoom,
          currentDate:new Date(currentDate).getTime()
        })
        console.log(that.data.activeId)
      }
      that._initFloorInfo();
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
   * todo 根据相关信息生成对应时间段的数据
   */
  _searchClass(year,month,day,floor,cell,floor_name) {
    let that = this;
    wx.cloud.callFunction({
      name: 'searchClass',
      data: {
        year,
        month,
        day,
        floor,
        cell,
        floor_name
      }
    }).then(res => {
      console.log(res.result)
      let hasSelectedClass = res.result.hasSelectedClass;
      let selectItemsCopy = JSON.parse(JSON.stringify(that.data.selectItems));
      console.log(selectItemsCopy)
      if (hasSelectedClass.length !== 0) {
        for (let item of hasSelectedClass) {
          selectItemsCopy.forEach((item1,index1,arr1) => {
            item1.children.forEach((item2,index2,arr2) => {
              if (item === item2.id) {
                item2.disabled = true
              }
            })
          })
        }
        that.setData({
          selectItems:selectItemsCopy
        })
      } else {
        let newSelectItems = [
          {
            text: '上午',
            disabled: false,
            children: [
              {
                text: '第一节课',
                id: 0,
                disabled: false 
              },
              {
                text: '第二节课',
                id: 1,
                disabled: false 
              },
              {
                text: '第三节课',
                id: 2,
                disabled: false 
              },
              {
                text: '第四节课',
                id: 3,
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
                id: 4,
                disabled: false 
              },
              {
                text: '第二节课',
                id: 5,
                disabled: false 
              },
              {
                text: '第三节课',
                id: 6,
                disabled:false
              },
              {
                text: '第四节课',
                id: 7,
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
                id: 8,
                disabled: false 
              },
              {
                text: '第二节课',
                id: 9,
                disabled: false 
              },
              {
                text: '第三节课',
                id: 10,
                disabled: false 
              },
              {
                text: '第四节课',
                id: 11,
                disabled: false
              }
            ]
          }
        ]
        that.setData({
          selectItems:newSelectItems
        })
      }
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
    let {not_classRoom, year,month,day,value1,option }= this.data;
    let floor_name;
    for (let item of option) {
      if (item.value === value1) {
        floor_name = item.text
      }
    }
    let { room, floor} = e.currentTarget.dataset;
    
    if (not_classRoom.length !== 0) {
      let isAllowSelect = not_classRoom.some(item => {
        return (item.selectedFloor === floor && item.selectedClassRoom === room)
      })
      if (isAllowSelect) {
        Toast('这间教室禁止使用')
      } else {
        this._searchClass(year,month,day,floor,room,floor_name);
            this.setData({
              isShowClass: true
            })
      }
    } else {
      this._searchClass(year,month,day,floor,room,floor_name);
      this.setData({
        isShowClass:true  
      })

    }
    if (oldSelectedClassRoom !== room || oldSelectedFloor !== floor ) {
      let newRoom = room < 10 
                    ? floor + '0' + room
                    : floor + '' + room
      this.setData({
        activeId: [],
        selectedFloor: floor,
        selectedClassRoom:room,
        room:newRoom
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
        activeId: [],
        room: ''
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
    const {activeId} = this.data;
    console.log(1);
    const index =activeId.indexOf(detail.id);
    console.log(detail)
    if (index > -1) {
      console.log(1111)
      activeId.splice(index,1);
    } else {
      activeId.push(detail.id)
    }
    this.setData({
      activeId
    }, ()=>{
    console.log(this.data.selectItems,'xxxxxx')

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
        activeId: [],
        room: ''
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
  const orderInfo = wx.getStorageSync('orderInfo')
  if (orderInfo) {
    wx.removeStorageSync('orderInfo')
    wx.switchTab({
      url: '/pages/index/index'
    });
  } else {
    wx.switchTab({
      url: '/pages/index/index'
    });
  }
},
/**
 * todo 提交的时候要进行验证
 * ? 1. 判断选择时间段是否选择  activeId 是否为空
 * todo 传入的相应的字段
 * ? activeId, year, month, day, room_num 
 */
submit() {
  let { activeId, year, month, day, selectedClassRoom, selectedFloor, value1, option } = this.data;
  const orderInfo = wx.getStorageSync('orderInfo')
  console.log(activeId)

  if (selectedClassRoom === 0) {
    Toast('请选择教室');
  } else if (activeId.length === 0){
    Toast('请选择时间段');
  } else {
    let floor_name,isAllow;
    activeId.sort((a,b) => {
      return a - b;
    });
   isAllow = activeId.every((item,index,arr) => {
      return arr[index] + 1 === arr[index+1]
    })
    if (isAllow) {
      Toast('请选择正确的时间段');
    } else {
      for (let item of option) {
        if (item.value === value1) {
          floor_name = item.text
        } 
      } 
      console.log(floor_name)
      console.log(11111333333)
      if (orderInfo) {
        wx.cloud.callFunction({
          name: 'submitOrder',
          data: {
            business_code: 'modify',
            selectedClassRoom,
            selectedFloor,
            year,
            month,
            day,
            class_id:activeId,
            floor_name,
            id:orderInfo.id
          }
        }).then(res => {
          let {successCode} = res.result;
          if (successCode === 201) {
            wx.removeStorageSync('orderInfo')
            Toast.success('修改预定成功')
            setTimeout(() => {
              wx.switchTab({
                url: '/pages/index/index',
              })
            },1500)
          } else {
            Toast.fail('修改订单失败')
          }
        })
      } else {
        wx.cloud.callFunction({
          name: 'submitOrder',
          data: {
            business_code: 'submit',
            selectedClassRoom,
            selectedFloor,
            year,
            month,
            day,
            class_id:activeId,
            floor_name,
            id:null
          }
        }).then (res => {
          console.log(res)
          const { successCode} = res.result;
          if (successCode === 200) {
            Toast.success('订单提交成功')
            setTimeout(()=> {
              wx.switchTab({
                url: '/pages/index/index'
              })
            },1500)
          } 
        })
  
      }
    }
  }
  
  
},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
    
    this._initFloor();
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