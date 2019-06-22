// pages/category/category.js
const app =  getApp();

  
Page({

  /**
   * 页面的初始数据
   */
  data: {
cates:[
  {name:'新品',id:'new'},
  {name:'众筹',id:'raise'},
  {name:'手机',id:'phone'},
  {name:'电视',id:'tv'},
  {name:'电脑',id:'computer'},
  {name:'智能',id:'intelligence'},
  {name:'家用电器',id:'housekeeping'},
  {name:'厨房电器',id:'kitchen'},
  {name:'穿戴酷玩',id:'dress'},
  {name:'家居家装',id:'funiture'},
  {name:'电源插座',id:'elect'},
  {name:'出行车载',id:'go'},
  {name:'耳机音响',id:'earphone'},
  {name:'路由器',id:'router'},
  {name:'个护健康',id:'health'},
  {name:'日用百货',id:'dailyUse'}, 
  {name:'床品家具',id:'bed'},
  {name:'配件线材',id:'parts'},
  {name:'办公用品',id:'work'},
  {name:'鞋服箱包',id:'luggage'},
  {name:'儿童用品',id:'childUse'},
  {name:'礼品',id:'gift'},
  {name:'服务',id:'server'}

],
goods:[],
toView:'new',
curIndex:0,
lastOn:0,
curHeight:0,
heights:[]

  },
  scrollHeight(e){
console.log(e)
const scrollTop = e.detail.scrollTop;
let cateHeight = this.data.heights
if(scrollTop>= cateHeight[cateHeight.length -1]-(this.data.curHeight/2)){
  // return
}
else{
  for(let i=0;i<cateHeight.length;i++){
    if(scrollTop>0 && scrollTop<cateHeight[0]){
      if(0 != this.data.lastOn){
         this.setData({
lastOn:0,
curIndex:0
      })
      }
     
     
    } else if(scrollTop >=cateHeight[i-1] && scrollTop<cateHeight[i]){
      if(i != this.data.lastOn){
        this.setData({
          curIndex:i,
          lastOn:i
        })
      }
    }


  }

}
 

  },
switch(e){
// console.log(e)
 let curIndex = e.currentTarget.dataset.index  
this.setData({
  toView:e.currentTarget.dataset.id,
  curIndex
})
},
detail(){
  wx.navigateTo({
    url: '../detail/detail',
    success: (result) => {
      
    },
    fail: () => {},
    complete: () => {}
  });
    
},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this
const  goods = app.globalData.goods
wx.getSystemInfo({
  success: (result) => {
    let height1 = (result.windowHeight * (750  / result.windowHeight)) 
    console.log(height1)
    that.setData({
      curHeight:height1
    })
  },
 
});
  
that.setData({
  goods,
  // curHeight:height1
})
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    let that = this;
    let heights = that.data.heights
    let h = 0;
  let  query = wx.createSelectorQuery();
  query.selectAll('.cateBox').boundingClientRect();

    query.exec(function(res){
      // console.log( res)
res[0].forEach((item)=>{
  // console.log(item)
  h +=  item.height;
heights.push(h);
// console.log(h)
})
that.setData({
  heights
})
    })
    
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