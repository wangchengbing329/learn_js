import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import User from "./module/use"
import { Toast } from "mand-mobile"

Vue.use(Router)

// 分模块的路由，合并传入Router

const commonRoutes = [
  {
    path: "/404",
    components: () => import("@/components/RouterError/404")
  },
  {
    path: "/401",
    components: () => import("@/components/RouterError/401")
  },
  // {
  //   path: "*",
  //   redirect: "/404"
  // },
  {
    path: "/",
    redirect: "/trip"
  }
]

let router = new Router({
  base: process.env.BASE_URL,

  routes: commonRoutes.concat(User)
})

// 导航守卫，非登陆状态下先登录
router.beforeEach((to, from, next) => {
  let tmp = localStorage.getItem("user");
  if (!tmp && to.name !== "Login") {
    Toast.succeed("您需要先登录！！！", 1500)
    next({ path: "/login" })
      
  }
  next()
})
export default router
