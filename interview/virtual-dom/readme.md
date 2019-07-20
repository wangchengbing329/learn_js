## vue  react  mvvm
不去做dom这一类耗费性能的事
不用去直接操作Dom ，操作data .... 将mvvm 的修改（dom 片段）更新到页面上去。 
SPA -> PWA  Application 性能特别好 

DOM 树 
ComponentA  render(Jsx) replaceChild() -> DOM 树上
性能很差 ？ 组件对应的树，遍历
Tag  node
  属性发生了改变 style 
  文本改变了 innerText 改变一下 
  append li*n 
 childTag   
 oldState newState
 oldTree  newTree ? virtual DOM 生成过程
 最后一站 DOM 树 
 oldState DOM树的 描述 JS 版本的DOM 树


 DOM 树 ，内存中有 JS Virtual DOM 


 ##  elmentObj =>新的 virtualDOM 
 diff  补丁 补到DOM上    
 
     1
   2   3
  4 5 6 7 
     
       1
   2        9
4     5   6    8

[{patch:value,index:2 }]

- 先序深度遍历    
-  patchs []  dom diff 
-  给DOM打补丁  