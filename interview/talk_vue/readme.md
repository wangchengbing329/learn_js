基于VUE2.0  + VUEX + VUEROUter 全家桶实现方案来模拟网易云音乐weBApp 项目Css 预编译工具使用的sass
,音乐上下滚动加载使用的betterScroll ,全面采用es6 风格代码。


 ##  解决了那些问题
 - 图片懒加载 使用的是 vue-lazy-load
 -  前后端分离 
    使用node.js NeteaseCloundMusicApi  proxy 
    8080  + 3000 
- fastclick  
- 设计了store 
songs  index song singer mode favoritelist 
searchHistory playHistory 

- iconfig 
- eslint 


- 上班，vue 项目， 分析清楚目录结构
1. components / 跟路由挂钩
工作的入口
2. store/全局共享，分模块 了解关键状态
3. common / 公共组件不用写 
4. api/ 前后端的协作方式 


