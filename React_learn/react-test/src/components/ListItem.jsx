import React, { Component } from 'react';
class List extends Component {
    state = {  }
    render() { 
        
        return ( 
            <>
            {this.props.list.map((item,index)=>{
           console.log(item)   
             return (
                    <li key = {index}>{item}</li>
                    
                )
            })}
            </>
         );
    }
}
 
export default List;