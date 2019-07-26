import React from 'react';
// import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Route} from './react-router-dom/index'
class App extends React.Component{
  render(){
    return(
      <BrowserRouter>
      <ul>
        <li>home</li>
        <li>detail</li>
      </ul>
      <Route path="/" component={Home}></Route>
      <Route path="/detail" component={Detail}></Route>

      </BrowserRouter>
    )
  }
}
function Home () {
  return 'Home'
}
function Detail () {
  return 'Detail'
}

export default App;
