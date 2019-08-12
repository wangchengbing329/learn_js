// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import globalComponents from '@/common/js/components'
Vue.config.productionTip = false
Vue.use(globalComponents)
/* eslint-disable no-new */
import '@/common/styles/reset.styl'
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
