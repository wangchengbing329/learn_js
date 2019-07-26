// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { InputItem } from 'mand-mobile'
import mandMobile from 'mand-mobile'

import 'mand-mobile/lib/mand-mobile.css'
import store from './store/index'
// 请求拦截器
import requestPlugin from './request/http'
Vue.use(requestPlugin)
Vue.use(mandMobile)



Vue.config.productionTip = false
Vue.component(InputItem.name, InputItem)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
