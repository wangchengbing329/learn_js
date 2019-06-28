// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
swipers:[
  {url:'https://i1.mifile.cn/a4/xmad_15577488348704_JZMLS.jpg',id:"index1"},
  {url:'https://i1.mifile.cn/a4/xmad_15566146318197_mAghl.jpg',id:"index2"},

  {url:'https://i1.mifile.cn/a4/xmad_15531616096346_mMwvn.jpg',id:"index3"}

],
categroies:[
  {url:"",imgUrl:'../../assets/nav_img/phone.png',name:'手机',},
  {url:"",imgUrl:'../../assets/nav_img/tv.png',name:'电视'},
  {url:"",imgUrl:'../../assets/nav_img/computer.png',name:'电脑'},
  {url:"",imgUrl:'../../assets/nav_img/zhineng.png',name:'智能'},
  {url:"",imgUrl:'../../assets/nav_img/jiaadian.png',name:'家电'},
 

],
categroiesB:[
  {Burl:"",imgUrlB:'../../assets/nav_img/xinpin.png',Bname:'新品'},
  {Burl:"",imgUrlB:'../../assets/nav_img/zhongchou.png',Bname:'小米众筹'},
  {Burl:"",imgUrlB:'../../assets/nav_img/huanxin.png',Bname:'以旧换新'},
  {Burl:"",imgUrlB:'../../assets/nav_img/pintuan.png',Bname:'拼团'},
  {Burl:"",imgUrlB:'../../assets/nav_img/zhenxuan.png',Bname:'每日臻选'},

],
goodsDetail:[
  {Img:"https://i1.mifile.cn/a1/pms_1504498936.11861982!220x220.jpg",Id:'米家电水壶',Dec:'一杯水，是一家人的安心',Price:'99元'},
  {Img:"https://i1.mifile.cn/a1/pms_1504498936.11861982!220x220.jpg",Id:'米家电水壶',Dec:'一杯水，是一家人的安心',Price:'99元'},
  {Img:"https://i1.mifile.cn/a1/pms_1504498936.11861982!220x220.jpg",Id:'米家电水壶',Dec:'一杯水，是一家人的安心',Price:'99元'},
  {Img:"https://i1.mifile.cn/a1/pms_1504498936.11861982!220x220.jpg",Id:'米家电水壶',Dec:'一杯水，是一家人的安心',Price:'99元'}


]

  },
  goToSearch(){
wx.showLoading({
  title: '功能还没开发哦',
  mask: false,
  success: (result) => {
    
  },
  fail: () => {},
  complete: () => {}
});
setTimeout(()=>{
wx.hideLoading();
  
},2000)
  
  },
  cateDetail(){
    wx.showLoading({
      title: '功能还没开发哦',
      mask: false,
      success: (result) => {
        
      },
      fail: () => {},
      complete: () => {}
    });
    setTimeout(()=>{
    wx.hideLoading();
      
    },2000)
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