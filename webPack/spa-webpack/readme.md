## rollup 
tree shaking  
没用到的代码 不会被打包 


##   parcel 
零配置  

## webpack 4.0 
production 会自动开启 tree shaking 
作用域里面的代码无法分析


在4.0 之前  
NODE_ENV  devlopment 

## css-module  
命名冲突  
利用 hash 值 解决命名冲突 重复命名


## webpack 3.0 
 import (/* webpackChunkName:'async'  */  
 magic comment 魔法注释 
 用来异步加载模块的 
 应用 路由 
 import Home from './xxx/xxx' 常规
 import Home from 'lazy!./xxx/xxx'

 用 babel-loader 检测有没有 lazy!
换成 magic comment 


