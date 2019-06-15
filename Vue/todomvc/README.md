- el:root  跟挂载节点，
- App component + vue-router +vuex 混合而一起的应用 
new Vue ({
    el:'#app',
    render:h=>h(App)
})

- vue 的难点是 数据管理 
数据可以是 ：
1. 组件状态，data () {

}
当两兄弟组件共享状态，比如登录功能
props 传递过去 
2. 应用状态？ 
 -  当页面上多个组件间要共享状态时，
 将共享状态，放置在这些组件的共同的父组件data 来管理
 状态一定要唯一， 放在一个地方（共同的父组件）方便管理
 如果状态不统一 ，状态可能不同步
  父子间组件通信v-on:increment = "incrementCount"
  props : this.$emit();
  - 麻烦，找父节点有点麻烦， this.$emit() 
  很多状态要共享的时候，很多组件，组件的关系也错综复杂，
  App  全局数据管理 vuex 应用状态管理  