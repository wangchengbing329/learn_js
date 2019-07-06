import * as   ActionType from './actionTypes'

export const add = function (list){
    return {
        type:ActionType.ADD,
        value:list
    }
}