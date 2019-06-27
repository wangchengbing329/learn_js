import React, { Component } from 'react';
import {debounce,decDebounce,decArrowDebounce,decDisplsyName} from './util'
// 防抖
// 加了一个静态属性 displayName
@decDisplsyName('CustomerExampleDebounce')
class ExampleDebounce extends Component {
    state = {  }
    // handleSubmit= debounce(function(){
    //     console.log(' reauest submit ')
    // },1000)
    @decDebounce(1000)
    handleSubmit(){
        console.log('submit request')
    }
    @decArrowDebounce(1000)
    handleBuy = ()=>{
        console.log('buy request')
    }
    render() { 
        console.log(this.handleBuy);
        console.log(this.handleSubmit)
        return ( 
            <div>
                <button onClick ={this.handleSubmit}>提交订单</button>
                <button onClick={this.handleBuy}>立即购买</button>
            </div>
         );
    }
}
 
export default ExampleDebounce;