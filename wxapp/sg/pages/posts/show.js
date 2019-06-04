import {
  API_DETAIL
} from '../../config/api';

Page({
  data:{
    isLoading:true,
    title:'',
    author:{},
    article:{}

  },
  onLoad:function(options){


    const id = options.id;
    const url = `${API_DETAIL}/${id}`;
// console.log(url)
    wx.request({
      url: API_DETAIL,
      success: (res) => {
        // let data = app.towxml.toJson(res.data.data.content, 'html');
        this.setData({
          'isLoading': false,
          'author': res.data.data.author,
          'title': res.data.data.title,
          'article': res.data.data.title
        })
      }
    })
  },
  // wx.request({
  //   url: API_DETAIL,
  //   success: (res) => {
  //     // let data = app.towxml.toJson(res.data.data.content, 'html');
  //     this.setData({
  //       'isLoading': false,
  //       'author': res.data.data.author,
  //       'title': res.data.data.title,
  //       'article': data
  //     })
  //   }
  //  })

})