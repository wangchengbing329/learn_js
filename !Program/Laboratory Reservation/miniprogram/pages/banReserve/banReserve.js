// miniprogram/pages/banReserve/banRerserve.js
import Dialog from '../../miniprogram_npm/@vant/weapp/dialog/dialog';
import Toast from '../../miniprogram_npm/@vant/weapp/toast/toast';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    value1:0,
    value2:'a',
    label1: '',
    label2:'',
    isFullDay:true,
    isFullFloor:true,
    isFullDayAndNotFullFloor:false,
    beginTime: 0,
    overTime:0,
    floor_name:'',
    max:12,
    classId:[],
    // 时间选择器1
    showPicker1:false,
    time1:new Date().getTime(),
    minDate1:new Date().getTime(),
    // 时间选择器2
    showPicker2:false,
    showDialog:false,
    time2:new Date().getTime(),
    minDate2:new Date().getTime(),
    floorActions:[],
    isShowClass:false,
    isShowFloor:false,
    clienx:0,
    forbiddenClass:[
      {
        floor:'',
        room:'',
        classId:[]
      }
    ],
    mainActiveIndex:0,
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
    ],
    options1: [
      { text: '全天', value: 0 },
      { text: '分时间段', value: 1 }
    ],
    options2: [
      { text: '整栋实验楼', value: 'a' },
      { text: '单个实验室', value: 'b' }
    ],
  },

  /**
   * todo clickNav 
   */
  onclickNav({detail = {}}) {
    this.setData({
      mainActiveIndex: detail.index || 0
    })
  },

  /**
   * todo clickItem
   */
  onClickItems({ detail = {} }) {
    const { classId } = this.data;

    const index = classId.indexOf(detail.id);
    if (index > -1) {
      classId.splice(index, 1);
    } else {
      classId.push(detail.id);
    }

    this.setData({ classId });
  },
  /**
   * todo handleSelectDay
   */
  handleSelectDay(e){
    const { value2 } = this.data;
    console.log(value2)
    if (value2 === 'a' && e.detail ===0 ) {
      this.setData({
        isFullDayAndNotFullFloor:false,
        isFullDay:true,
        isFullFloor:true,
        value1:e.detail
      })
    } else if (value2 === 'a' && e.detail === 1) {
      this.setData({
        isFullDayAndNotFullFloor:false,
        isFullDay:false,
        isFullFloor:true,
        value1:e.detail
      })
    } else if (value2 === 'b' && e.detail === 0 ) {
      this.setData({
        isFullDayAndNotFullFloor:true,
        isFullDay:true,
        isFullFloor:true,
        value1:e.detail
      })
    } else {
      this.setData({
        isFullDayAndNotFullFloor:false,
        isFullDay:true,
        isFullFloor:false,
        value1:e.detail
      })
    }
  },
  /**
   * todo handleSelectFloor
   */
  handleSelectFloor(e){
    const { value1 } = this.data;
    if (value1 === 0 && e.detail === 'a') {
      this.setData({
        isFullDayAndNotFullFloor:false,
        isFullDay:true,
        isFullFloor:true,
        value2:e.detail
      })
    } else if (value1 === 1 && e.detail === 'a') {
      this.setData({
        isFullDay:false,
        isFullDayAndNotFullFloor:false,
        isFullFloor:true,
        value2:e.detail
      })
    } else if (value1 === 0 && e.detail === 'b' ) {
      this.setData({
        isFullDayAndNotFullFloor:true,
        isFullDay:true,
        isFullFloor:true,
        value2:e.detail
      })
    } else {
      this.setData({
        isFullFloor:false,
        isFullDayAndNotFullFloor:false,
        isFullDay:true,
        value2:e.detail
      })
    }
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
  /**
   * 初始化实验楼信息
   */
  _initFloorData(){
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
        floorActions:newAction
      })
      
    })
  },
  /**
   * 选择实验楼
   */
  handleExperiment(){
    this.setData({
      isShowFloor:true
    })
  },
  onSelectFloor(e){
    console.log(e)
    let { name } = e.detail;
    this.setData({
      floor_name:name
    })
  },
  onCloseFloor(e){
    console.log(e)
    this.setData({
      isShowFloor:false
    })
  },
  handleSegment(e){
    const {index} = e.currentTarget.dataset;
    const {forbiddenClass} = this.data;
    if (index !==0 && !index) {
      this.setData({
        isShowClass:true
      })
    } else {
      let indexCopy = JSON.parse(JSON.stringify(index))
      console.log(forbiddenClass)
      let classId = forbiddenClass[index].classId;
      console.log(classId)
      console.log('yes'+index )
      this.setData({
        isShowClass:true,
        classId
      })
    }
  },
  closeClass(){
    this.setData({
      isShowClass:false
    })
  },
  cancel() {
    wx.switchTab({
      url:'/pages/mine/mine'
    })
  },
  confirm() {
    let {beginTime,overTime,isFullDay,isFullFloor,forbiddenClass,floor_name,classId,isFullDayAndNotFullFloor} = this.data;
    let submitData = {};
    if (!beginTime || !overTime || !floor_name) {
      console.log(beginTime,overTime,floor_name)
      Toast.fail('请保持信息完善')
    } else {
      if (!isFullDay && isFullFloor && classId.length === 0) {
        Toast.fail('请选择时间段')
      } else if (!isFullDay && isFullFloor && classId.length !== 0) {
        submitData = {
          beginTime,
          overTime,
          isFullDay,
          isFullFloor,
          floor_name,
          forbiddenClass:[{
            floor:'',
            room:'',
            classId
          }]
        }
        this.submitData(submitData);
      } else if(isFullDay && isFullFloor && !isFullDayAndNotFullFloor) {
        submitData = {
          beginTime,
          overTime,
          floor_name,
          isFullDay,
          isFullFloor,
          forbiddenClass:[]
        }
        this.submitData(submitData);
      } else {
        submitData = {
          beginTime,
          overTime,
          floor_name,
          isFullDay,
          isFullFloor,
          forbiddenClass
        }
        this.submitData(submitData);
      }
    }
  },
  submitData(submitData){
    wx.cloud.callFunction({
      name: 'submitForbiddenInfo',
      data:{
        submitData
      }
    }).then(res => {
      const {ret_code} = res.result;
      console.log(res);
      if (ret_code === 200) {
        Toast.success('提交成功')
        setTimeout(()=> {
          wx.switchTab({
            url:'/pages/mine/mine'
          })
        })
      } else if(ret_code === 403){
        Toast('所选时间重叠，请确认后重试')
      } else {
        Toast.fail('提交失败，请稍后再试')
      }
    })
  },
  delete(e) {
    const {index} = e.currentTarget.dataset;
    let {forbiddenClass} = this.data;
    const that = this;
    Dialog.confirm({
      title:'删除',
      message:`确认删除教室${index + 1}`
    }).then(()=>{
      forbiddenClass.splice(index,1);
      that.setData({
        forbiddenClass
      },()=>{
        Dialog.close()
      })

    }).catch(()=>{
      Dialog.close()
    }
    )
  },
  addClass(){
    const newClass = {
      floor: '',
      room: '',
      classId:[]
    }
    const { value1, value2,isFullFloor,isFullDayAndNotFullFloor,classId,forbiddenClass } = this.data;
    let index = classId.length;
    let forbiIndex = forbiddenClass.length;
    if (!isFullFloor) {
      if (index ===0 || !forbiddenClass[forbiIndex-1].floor || !forbiddenClass[forbiIndex-1].room) {
        Toast.fail('请保持正在编辑教室的信息完整')
      } else {
        forbiddenClass[forbiIndex-1].classId = classId
        forbiddenClass.push(newClass)
        this.setData({
          forbiddenClass,
          classId:[]
        })
        console.log(forbiddenClass)
      }
    } else if (isFullDayAndNotFullFloor) {
      if (!forbiddenClass[forbiIndex-1].floor || !forbiddenClass[forbiIndex-1].room) {
        Toast.fail('请保持正在编辑教室的信息完整')
      } else {
        forbiddenClass.push(newClass)
        this.setData({
          forbiddenClass
        })
      }
    }
    
  },
  inputFloor(e){
    console.log(e)
    const {index } = e.currentTarget.dataset;
    let {forbiddenClass} = this.data;
    const floorChange = 'forbiddenClass['+index+'].floor'
    this.setData({
      [floorChange]:parseInt(e.detail) 
    })
  },
  inputRoom(e){
    const {index } = e.currentTarget.dataset;
    let {forbiddenClass} = this.data;
    const roomChange = 'forbiddenClass['+index+'].room'
    this.setData({
      [roomChange]:parseInt(e.detail)
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this._initFloorData()
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