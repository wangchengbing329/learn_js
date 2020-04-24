// miniprogram/pages/modifySchedule/modifySchedule.js
import Toast from '../../miniprogram_npm/@vant/weapp/toast/toast';
import Dialog from '../../miniprogram_npm/@vant/weapp/dialog/dialog';
import Notify from '../../miniprogram_npm/@vant/weapp/notify/notify'
import {weekday} from '../../util';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    enrollment:new Date().getMonth() < 7 
                  ? new Date().getFullYear() - 4
                  : new Date().getFullYear() - 3,
    enrollmentMessage:'',
    weekDay:[],
    selectId:[],
    selectItems:[],
    classNum:1,
    isShowClass:false,
    mainActiveIndex:0,
    isExit:false,
    profession:'',
    department:'',
    selectClass:'',
    schedule:[],
    className:'',
    floorName:'',
    floor:'',
    room:'',
    showPicker1:false,
    time1:new Date().getTime(),
    minDate1:new Date().getTime()-365*24*60*60*1000,
    // 时间选择器2
    showPicker2:false,
    showDialog:false,
    time2:new Date().getTime(),
    minDate2:new Date().getTime()-365*24*60*60*1000,
    label1:'',
    label2:'',
    beginTime:0,
    overTime:0
  },
  enrollChange(e) {
    if (e.detail.length<4 || e.detail.length > 4) {
      this.setData({
        enrollmentMessage: '请输入正确格式的年份'
      })
    } else if (e.detail.length === 4 && parseInt(e.detail)< 2010) {
      this.setData({
        enrollmentMessage: '输入年份不能小于2010年'
      })
    } else {
      this.setData({
        enrollment: parseInt(e.detail),
        enrollmentMessage: ''
      })
    }
  },
  onCloseClass(){
    let {mainActiveIndex,selectId,selectItems,profession,classNum,enrollment,schedule,selectIdCopy} = this.data;
    if (!selectId.length) {
      this.setData({
        isShowClass:false
      })
    } else {
      let department = selectItems[mainActiveIndex].text;
      let selectClass = department + '/' + profession + classNum;
      console.log(selectId,selectIdCopy)
      if (selectIdCopy != selectId) {
        this.setData({
          isShowClass:false,
          department,
          selectClass
        })
        this._initClass();
        this._initSchedule(enrollment,department,profession,classNum);
      } else {
        this.setData({
          isShowClass:false,
          department,
          selectClass
        })
        this._initSchedule(enrollment,department,profession,classNum);

      }
    }
  this.setData({
    isShowClass:false
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
  classNumChange(e) {
    this.setData({
      classNum:parseInt(e.detail)
    })
  },
  classChange(e) {
    let {enrollment} = this.data;
    this._initDepartment(enrollment);
  },
  _initDepartment(enrollment) {
    const that = this;
    let {isExit,profession,department,classNum} = this.data;
    if (!enrollment) {
      Toast('请先输入入学年份')
    } else {
      wx.cloud.callFunction({
        name:'searchDepartment',
        data:{
          enrollment
        }
      }).then(res => {
        console.log(res)
        const {departmentList} = res.result;
        if (!departmentList.length) {
          Toast('请输入正确的入学年份')
        }else { 
          that.setData({
            selectItems:departmentList,
            isShowClass:true
          })
        }
      })
    }
    
    },
    _initSchedule(enrollment,department,profession,classNum) {
      const that = this;
      // const {selectItems,mainActiveIndex,selectId,enrollment} = this.data;
      // let department = selectItems[mainActiveIndex].text;
      // let index = Math.floor(Math.random()*(selectItems[mainActiveIndex].length))
      // let profession = selectItems[mainActiveIndex].children[index].text;
      // let classNum;
      wx.cloud.callFunction({
        name:'searchSchedule',
        data: {
          enrollment:enrollment,
          department:department,
          profession:profession,
          classNum:classNum  
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
    },
    onClickNav({detail = {}}){

      this.setData({
        mainActiveIndex:detail.index || 0
      })
      },
      onClickItem({detail = {}}){
        const {selectId} = this.data;
        const selectIdCopy = JSON.parse(JSON.stringify(selectId))
        const index =selectId.indexOf(detail.id);
        if (index > -1) {
          console.log(1111)
          selectId.splice(index,1);
          this.setData({
            selectId
          })
        } else {
          let text = detail.text.slice(0,-1);
         let num = detail.text.slice(-1)
          selectId.push(detail.id)
          this.setData({
            selectIdCopy,
            selectId,
            profession:text,
            classNum:parseInt(num) || 1
          })
        }
        
      },
      modify(e){
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
            if(!className || !className || (!floor && floor !== 0) || (!room && room !==0) ) {
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
            if(!className || !className ||(!floor && floor !== 0) || (!room && room !==0)) {
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
      delete(e) {
        
        const {index,num,state} = e.currentTarget.dataset;
        const {schedule,weekDay} = this.data;
        if (index === 0 || num === 0 || !state) {
          return 0
        } else {
        let indexNum = schedule.findIndex(item => {
          return item.classDay === index && item.classId === num-1
        })
        wx.showModal({
          content:'确定删除' + schedule[indexNum].className + '?',
          success:(res)=>{
            console.log(res)
            if (res.confirm) {
              let selected = 'weekDay['+index+'].class['+num+'].state'
              let selectedClassName = 'weekDay['+index+'].class['+num+'].className'
              schedule.splice(indexNum,1)
              console.log(schedule)
              this.setData({
                schedule,
                [selected]:false,
                [selectedClassName]:''
              })
            }
          }
        })
      }
      },
      submitSchedule() {
        let {department,classNum,profession,beginTime,overTime,schedule,enrollment} = this.data;
        if (!department || !classNum ||!profession ||!beginTime || !overTime ||!schedule.length) {
          Toast('请保持课程表信息完整')
        } else {
          if (beginTime > overTime) {
            Toast('请选择正确的开始结束日期')
          } else {
          console.log(enrollment,department,profession,classNum,beginTime,overTime,enrollment)
          const that = this;
          wx.cloud.callFunction({
            name:'modifySchedule',
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
      clear(){
        wx.showModal({
          content:'您确定要删除所有课程表吗？',
          success:res => {
            if(res.confirm) {
              wx.cloud.callFunction({
                name:'clearSchedule'
              }).then(res => {
                const {ret_code} =res.resuslt;
                if (ret_code === 200) {
                  Toast('删除成功')
                  wx.switchTab({
                    url:'/pages/mine/mine'
                  })
                } else {
                  Toast('删除失败')
                }
              })
            }
          }
        })
      },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this._initClass();
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