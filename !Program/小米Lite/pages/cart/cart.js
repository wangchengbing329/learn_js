// pages/cart/cart.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
hasList:false,
carts:[],
ammount:1,
price:100,
selectAll:true,
totalPrice:0,
totalGoods:0
  },
goToArround(){
 wx.switchTab({
   url: '../index/index',
   success: (result) => {
     
   },
   fail: () => {},
   complete: () => {}
 });
   
    
}
,
change(e){
  console.log(e)
  let index = e.currentTarget.dataset.index;
  let carts = this.data.carts
let selected = carts[index].selected;
selected = !selected; 
this.setData({
  carts:carts
})
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
this.setData({
  hasList:true,
  carts:[
  {selected:false,url:'https://i1.mifile.cn/f/i/g/2015/cn-index/mi9-80.png?width=80&height=80',attr:'Redmi K20 Pro 8GB+256GB 火焰红'}

  ]
})
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