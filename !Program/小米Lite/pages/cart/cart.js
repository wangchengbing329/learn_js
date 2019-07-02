// pages/cart/cart.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hasList: false,
    carts: [{ id: "rk20", selected: true, url: 'https://i1.mifile.cn/f/i/g/2015/cn-index/mi9-80.png?width=80&height=80', num: 1, price: 100, attr: 'Redmi K20 Pro 8GB+256GB 火焰红' },
    { selected: true, url: 'https://i1.mifile.cn/f/i/g/2015/cn-index/m8se-80.png?width=80&height=80', num: 1, price: 9900, attr: 'Redmi K20 Pro 8GB+256GB 火焰红' },
    { selected: true, url: 'https://i1.mifile.cn/f/i/g/2015/cn-index/m8se-80.png?width=80&height=80', num: 1, price: 9900, attr: 'Redmi K20 Pro 8GB+256GB 火焰红' }

    ],
    selectAll: true,
    totalPrice: 0,
    totalGoods: 0
  },
  goToArround() {
    wx.switchTab({
      url: '../index/index',

    });


  }
  ,
  change(e) {
    console.log(e)

    let index = e.currentTarget.dataset.index;
    let carts = this.data.carts
    let selectAll = this.data.selectAll
    let selected = carts[index].selected;
    carts[index].selected = !selected;
    // 只要一个取消就全选取消 

    const check = carts.some(ch => {

      return ch.selected === false;
    })
    if (check) {
      this.setData({
        selectAll: false
      })

    } else {
      this.setData({
        selectAll: true
      })
    }

    this.setData({
      carts,
      // selectAll:this.data.selectAll

    })



    this.accountPrice()
  },
  selectAllStatus() {
    // console.log(e)
    let selectAll = this.data.selectAll;
    selectAll = !selectAll;
    let carts = this.data.carts;
    for (let i = 0; i < carts.length; i++) {
      carts[i].selected = selectAll;

    }

    this.setData({
      selectAll,
      carts
    })
    this.accountPrice()
  },
  accountPrice() {
    // console.log(e)
    // let num = this.data.totalGoods;
    let carts = this.data.carts;
    let goods = 0;
    let Price = 0;
    for (let i = 0; i < carts.length; i++) {
      if (carts[i].selected === true) {
        Price += carts[i].num * carts[i].price
        goods += carts[i].num
      }

    }


    this.setData({
      totalGoods: goods,
      totalPrice: Price


    })
    // this.getTotal
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(options)
   
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

    wx.getStorage({
      key: 'amount',
      success: (res) => {
        let carts = this.data.carts
        let num = 0;
        let curNum = 0;
        for (let i = 0; i < carts.length; i++) {
          if (carts[i].id === res.data[1]) {
          
            num = 'carts[' + i +'].num';
            curNum = res.data[0]
            console.log(curNum ,i)
            this.setData({
              [num]: curNum

            })

            // this.accountPrice()

            //  console.log(num)
          }

        }
      },
      fail: () => { },
      complete: () => { }
    });


    setTimeout(() => {

      this.setData({
        hasList: true,

      })

      this.accountPrice()
    }, 1000)

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