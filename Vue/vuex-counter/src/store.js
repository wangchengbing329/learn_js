// CEO 
import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)
// 改变   唯一可以修改状态 
// 财务
const mutations = {
    increment (state) {
        state.count ++;
    },
    decrement (state) {
        state.count --;
    }
}
// 动作 部门 不能修改 state 
const actions = {
increment:({commit}) =>commit('increment'),
decrement:({commit}) =>commit('decrement'),
// actions 不可以修改
incrementIfOdd ({commit,state}) {
if((state.count +1) %2 ===0){
    commit('increment')
}
},
incrementSync ({commit}){
    // actions axios 异步取数据...
    // return new Promise
    return new Promise((resolve,reject)=>{

        setTimeout(()=>{
    commit('increment')
        },1000)
    })
}
}
// 状态
const state = {
    count :0
}
// 组件里面的computed 
const getters = {
evenOrOdd:state =>state.count %2 ===0?'even':'odd'
}
export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})