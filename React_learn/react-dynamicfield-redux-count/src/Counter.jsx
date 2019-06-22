import React from 'react';
// 计数器 + - 
class Counter extends React.Component{
    render() {
        const {value,OnIncrement,OnDecrement} = this.props;
        return(
            <div>
               {value}
            
            <div><button onClick={OnIncrement}>+</button></div>
            <div><button onClick={OnDecrement}>-</button></div>
            </div>
        )
    }
}
export default Counter