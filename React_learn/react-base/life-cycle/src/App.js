import React from 'react';
import logo from './logo.svg';
import './App.css';
import Child from './Child'
import Child1 from './Child1'
class App extends React.Component{
  state={
count:0,
showChild:true
  }
  handleToggleChild = () =>{
    const {showChild} = this.state;
    this.setState({
      showChild:!showChild
    })
  }
handleChildPropsChange = ()=>{
let   {count} = this.state;
count++;
this.setState({
  count
})
}
  render(){
  const {count,showChild} = this.state;
  
    return(
      <div>
        <button onClick={this.handleChildPropsChange}>Child component 1</button>
        <button onClick ={this.handleToggleChild}> toggle Child</button>
        {
          !showChild?
        <Child  count={count}/>:<Child1 count={count}/>}
      </div>
    )
  }
}

export default App;
