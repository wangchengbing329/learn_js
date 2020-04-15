// miniprogram/pages/lecture/lecture.js
import Toast from '../../miniprogram_npm/@vant/weapp/toast/toast'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    desc:'',
    fileList:[],
    cloudPath:[]
  },
  changeDesc(e){
    this.setData({
      desc:e.detail
    })
  },
  afterRead(event){
    console.log(event)
    const { file, name } = event.detail;
    const fileList = this.data[`fileList`];
    let newFile = file.hasOwnProperty('isImage')
           ? file
           : {...file,isImage:true}
    this.setData({fileList : fileList.concat(newFile) });
    console.log(this.data.fileList)
    this.uploadToCloud();
  },
  
  uploadToCloud() {
    wx.cloud.init({env: 'wcb-1a4bp'});
    
    const { fileList } = this.data;
    if (!fileList.length) {
      wx.showToast({ title: '请选择图片', icon: 'none' });
    } else {
      const timeStamp = new Date().getTime();
      const uploadTasks = fileList.map((file, index) => this.uploadFilePromise(`my-photo${timeStamp}.png`, file));
      Promise.all(uploadTasks)
        .then(data => {
          console.log(data)
          const newFileList = data.map(item => { url: item.fileID });
          this.setData({ cloudPath: data, fileList: newFileList });
          
        })
        .catch(e => {
          wx.showToast({ title: '上传失败', icon: 'none' });
          console.log(e);
        });
    }
  },
  uploadFilePromise(fileName, chooseResult) {
    return wx.cloud.uploadFile({
      cloudPath: fileName,
      filePath: chooseResult.path
    });
  },
  return(){
    wx.switchTab({
      url:'/pages/mine/mine'
    })
  },
  submit(){
    const {desc,cloudPath,fileList} = this.data;
    console.log(desc,cloudPath);
    console.log(cloudPath)
    if (fileList.length === 0) {
      wx.showToast({ title: '请选择海报', icon: 'none' });
    } else {
      wx.cloud.callFunction({
        name:'submitLecture',
        data:{
          info:{
            fileId:cloudPath[0].fileID,
            desc,
            time:new Date().getTime()
          }
        }
      }).then(res =>{
        const {ret_code} = res.result;
        if(ret_code === 200) {
          wx.switchTab({
            url:'/pages/mine/mine'
          })
        } else {
          Toast('上传失败，请稍后再试')
        }
      })

    }

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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