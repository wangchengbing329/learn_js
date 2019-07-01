//state
import {combineReducers} from 'redux';
import {membersReducer} from './members'
export interface State{
members:MemberEntity[]
}
import {MemberEntity} from '../model';
export const state = combineReducers<State>({
    members:membersReducer
})