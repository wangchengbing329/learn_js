import React, { Component } from 'react';
import indexSao from '../../utils/assets/index-sao.png';
import mail from '../../utils/assets/mail3.png';
import  IDcode from '../../utils/assets/IDcode.png';
import './selection.css'
class Selction extends Component {
    state = { 
        selections:[
            {title:'扫一扫',color:'#307bf6',img:indexSao},
            {title:'驿站取件',color:'#26a4ff',img:mail},
            {title:'身份码',color:'#52ceff',img:IDcode},



        ]
     }
    render() { 
        let selections = this.state.selections
        return ( 
            <>
            <div className="selectionsBox">
                {selections.map((item,index)=>{
                    return  <div className="selections" key={index} style={{backgroundColor:item.color}}>
                        <img className="selectionImg"   src={item.img} alt=""/>
                        <span className="selectionTitle">{item.title}</span>
                    </div>
                })}
            </div></>
         );
    }
}
 
export default Selction;