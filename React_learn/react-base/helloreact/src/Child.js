import React from 'react'
// import React,{Component} from 'react'
class Child extends React.Component{
    state = {}
    handleClick (e){
        console.log(this);
        this.handleAnotherFun = () =>{
            console.log('handleAnotherFun')
        }
        console.log(e.target.innerHTML)
    }
    handleChange = (e) =>{
        console.log(e.target.value)
        this.setState({
            inputValue:e.target.value
        })
    }
    render() {
        return (
            <div onClick={this.handleClick.bind(this)}>
                {this.props.msg}
                <input type="text"  value={this.state.inputVal} onChange={this.handleChange} placeholder="请输入内容"/>
                
            </div>
        )
    }
}
export default Child;
