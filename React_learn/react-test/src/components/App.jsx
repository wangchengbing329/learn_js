import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import ListItem from './ListItem'
class App extends Component {
  state={
    List:[] 
  }
  render() {
    return (
      <>
      <input type="text"  />
      <button>增加</button>
      <ul>
        <ListItem list={this.state.List}></ListItem>
      </ul>
      </>
    )
  }
}

export default App;

 

