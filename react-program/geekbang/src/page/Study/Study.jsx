import React, { Component } from 'react';
import './study.css'
class Study extends Component {
    state = { 
        hour:2,
        second:10,
        collection:[
            {id:1,amount:0,category:'笔记'},
            {id:2,amount:0,category:'留言'},
            {id:3,amount:0,category:'收藏'},
            {id:4,amount:0,category:'下载'}
        ],
        studyContent:[1,2,34,4]
     }
     noOrder(){
         return (
             <div className="noOrder">

                 <span>暂无订购内容</span>
                 <div className="order">订阅</div>
             </div>

         )
     }
     contentShow () {
         return (
             <div className="contentShow">
                 {this.state.studyContent.map((item,index)=>{
                     return(
                     <div className="content-box" key ={index }>{item}</div>
                     )
                 })}
             </div>
         )
     }
    render() { 
        const {hour,second,collection,studyContent} = this.state
        let content = studyContent.map((item,index)=>{
            return(
                <div className="content-box" key={index}>{item}</div>
            )
        })
        return ( 
            
           <div className="study">
               <h1 style={{margin:"0.2rem 1rem"}}>我的学习</h1> 
               <div className="study-hour">
                   总时长<span className="time">{hour}</span>小时<span className="time">{second}</span>分钟
               </div>
            <div className="collection">{
                collection.map((item,index)=>{
                    return(
                        <div className="collection-wrapper" key={index}>
                            <div className="collection-amount">
                                {item.amount}
                            </div>
                            <div className="collection-category">{item.category}</div>
                        </div>
                    )
                })
            }</div>

            <div className="content-wrapper">
            <div className="study-content">{studyContent.length === 0?this.noOrder():this.contentShow()}</div>
            </div>
           </div>
         );
    }
}
 
export default Study;