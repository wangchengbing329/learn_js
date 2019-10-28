import Vuex from 'vuex';
import Vue from 'vue'
Vue.use(Vuex)

const state = {
  value : [
    25,26,27,28,29,30
  ]
}
const getter = {

}
const mutations ={
incr :(state,values)=>{
  console.log(values)
state.value.push(values)
},
decre:(state,item)=>{
  state.value.splice(item,1)
}
}
const action = {

}
export default new Vuex.Store({
  getter,
  state,
  mutations,
  action
})
