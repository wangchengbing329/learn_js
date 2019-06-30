// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
selections:[
  {id:'rk20', attr:'Redmi K20 Pro 8GB+256GB 火焰红',price:'100',selected:false},
  {id:'rk20',attr:'Redmi K20 Pro 8GB+256GB 火焰红',price:'100',selected:true},
  {id:'rk20',attr:'Redmi K20 Pro 8GB+256GB 火焰红',price:'100',selected:false}


],

Num:[1,2,3,4,5,6,7,8,9,10],
curIndex:0,
amount:null
  },
  changeStatus(){
if(this.data.selections.any(function(e){

})){

}
  },

changeNum(e){
//  console.log(this.data.Num[e.detail.value])

  this.setData({
curIndex:e.detail.value,
amount:this.data.Num[e.detail.value]

  })
  wx.setStorage({
    key: 'amount',
    data: [this.data.amount,this.data.selections[0].id ],
    success: (result) => {
      console.log(result)
    },
    fail: () => {},
    complete: () => {}
  });
    
},
orderSure(){
 
  
 wx.switchTab({
   url: '../cart/cart',
   success: (result) => {
    
   },
   fail: () => {},
   complete: () => {}
 });
   
    
},
delete(){
wx.showModal({
  title: '您确认要删除商品吗？',
  content: '',
  showCancel: true,
  cancelText: '取消',
  cancelColor: 'black',
  confirmText: '确定',
  confirmColor: 'blue',
  success: (result) => {
    
    if (result.confirm) {
      wx.setStorageSync({
        key: 'index',
        data: this.account,
        success: (res) => {
          
        },
        fail: () => {},
        complete: () => {}
      });
        
    }
  },
  fail: () => {},
  complete: () => {}
});
  
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