import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import login from '@/components/login'
import main from '@/components/main'
import MainDetail from '@/components/MainDetail'
import UserList from '@/components/UserList'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: login
    },
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    },{
      path:'/main',
      name:'main',
      component:main,
      children:[
        {
          path:'/',
          name:'MainDetail',
          component:MainDetail,
        },
        {
          path:'/main/user-list',
          name:'UserList',
          component:UserList
        },
        
      ]
    },
   
  ]
})
