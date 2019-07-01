// import * as React from 'react';
import {memberAPI} from '../../../api/member';
import {MemberEntity} from '../../../model';
import { members } from '../../../api/member/mockData';

export const fetchMembersAction =()=>(dispatch)=>{
    // ajax api
    memberAPI.fetchMembers()
    // 下一个方法
    .then
    (members=>{
        dispatch(fetchMembersCompleted(members))
    })
}
// actions 返回的是一个type 对象 ，reducer重新计算，reducer = state + mutations
const  fetchMembersCompleted = (members:MemberEntity[])=>({
    type:'FETCH_MEMBER_COMPLETED',
    payload:members
})