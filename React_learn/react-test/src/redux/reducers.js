// import {connect } from 'react-redux'
import {combineReducers} from  'redux';
import * as ActionTypes from './actionTypes'

const lists = {
    list:[
        '学习',
        '游戏'
    ]
}
export function addTodos(state =lists,action){
if(action.type === ActionTypes.ADD ){
     state.list = action.value
} 
    return state
}
 export default combineReducers =({
       addTodos
 })