import  Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import trip from './modules/trip'
export default new Vuex.Store({
  modules:{
    trip
  }
})
