- 小程序是个伟大的产品
Androis/Ios 两套系统

小程序使用前端开发思路和技术，基于微信大APP，APP开发
1. 一份代码到处运行
2. 前端开发，快快快
3. 基于微信性能良好

1. wxml等于 HTML
新的标签或组件view相当于div 
2. css等于wxss 
3. js
page = wxml + wxcss + js
App = 多个page
这就是小程序的架构
   

三者周转的很6
写结构
写样式 rpx
js 约定 事件函数只要加在
Page({
    ,
    bind.......:function(){

    }
})  
bindtap = bind 