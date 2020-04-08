// miniprogram/pages/selfInfo/selfInfo.js
import Toast from '../../miniprogram_npm/@vant/weapp/toast/toast';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    enrollment: '',
    school:'',
    department:'',
    profession:'',
    classNum:'',
    enrollmentMessage: '',
    studentId:'',
    schoolMessage: '',
    classMessage: '',
    isUser:true,
    isShowClass:false,
    selectItems:[],
    mainActiveIndex:0,
    selectId:[],
    selectClass:'',
    isExit:false
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
  schoolChange(e){
    this.setData({
      school:e.detail
    })
  },
  classChange(e) {
    // this.setData({
    //   isShowClass:true
    // })
    let {enrollment} = this.data;
    this._initDepartment(enrollment);

  },
  idChange(e) {
    this.setData({
      studentId:e.detail
    })
  },
  confirmInfo() {
    let {school,enrollment,studentId,classNum,profession,department} = this.data;
    wx.cloud.callFunction({
      name: 'modifyUserInfo',
      data: {
        school,
        department,
        enrollment,
        roleId:studentId,
        classNum,
        profession
      }
    }).then(res => {
      const { ret_code } = res.result;
      if (ret_code === 200 ) {
        Toast.success('设置成功');
        wx.switchTab({
          url: '/pages/mine/mine'
        })
      } else {
        Toast.fail('设置失败')
      }
    })
  },
  return() {
    wx.navigateBack({
      delta: 1, // 回退前 delta(默认为1) 页面
    })
  },
getUserInfo() {
  const that = this;
  wx.cloud.callFunction({
    name: 'getUserInfo'
  }).then(res => {
    const { roleInfo } = res.result;
    console.log(roleInfo)
    if (roleInfo.enrollment) {
      this.setData({
        isExit:true
      })
    }
    let selectClass =roleInfo.department
                    ?  roleInfo.department + '/' + roleInfo.profession + roleInfo.classNum
                    :  ''
    that.setData({
      enrollment:roleInfo.enrollment,
      classNum:roleInfo.classNum,
      department:roleInfo.department,
      selectClass:selectClass,
      school:roleInfo.school,
      studentId:roleInfo.roleId,
      profession:roleInfo.profession
    })
  })
},
onClickNav({detail = {}}){

this.setData({
  mainActiveIndex:detail.index || 0
})
},
onClickItem({detail = {}}){
  const {selectId} = this.data;
  console.log(1);
  const index =selectId.indexOf(detail.id);
  console.log(detail)
  
  if (index > -1) {
    console.log(1111)
    selectId.splice(index,1);
    this.setData({
      selectId
    })
  } else {
    let text = detail.text.slice(0,-1);
   let num = detail.text.slice(-1)
  //  console.log(text,num)
    selectId.push(detail.id)
    this.setData({
      selectId,
      profession:text,
      classNum:parseInt(num) || 1
    })
  }
  
},
onCloseClass(){
  let {mainActiveIndex,selectId,selectItems,profession,classNum} = this.data;
  if (!selectId.length) {
    this.setData({
      isShowClass:false
    })
  } else {
    let department = selectItems[mainActiveIndex].text;
    let selectClass = department + '/' + profession + classNum;
    this.setData({
      isShowClass:false,
      department,
      selectClass
    })
  }
this.setData({
  isShowClass:false
})
},
_initDepartment(enrollment) {
const that = this;
let {isExit,profession,department,classNum} = this.data;
if (!enrollment) {
  Toast('请先输入入学/入职年份')
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
      Toast('请输入正确的入学/入职年份')
    }else {
      if (isExit) {
        let index = departmentList.findIndex(item => item.text === department);
        console.log(index)
        let selectId = [];
        for (let item of departmentList[index].children) {
          if (item.text === profession + classNum) {
            console.log(item.id)
            selectId.push(item.id)
          }
        }
        that.setData({
          selectItems:departmentList,
          isShowClass:true,
          selectId,
          mainActiveIndex:index
        })  
      }else {
      that.setData({
        selectItems:departmentList,
        isShowClass:true
      })
    }
    }
  })
}

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
    this.getUserInfo();
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