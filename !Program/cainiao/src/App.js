import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import Header from './components/header/Header'
import {Input,Icon} from 'antd'
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (  
      <div className="App">
        <Header></Header>
         <Input prefix={<Icon type="search" ></Icon>}></Input>
        <div className="tabBar">

          <div className="tab-item">
            <NavLink className="nav-link" to="" >
             <img src="" alt=""/>
                <span>首页</span>
                </NavLink>
          </div>

          <div className="tab-item">
            <NavLink>
              <img src="" alt=""/>
              <span>取件</span>
              </NavLink>
          </div>

          <div className="tab-item">
            <NavLink className="nav-link" to="">
              <img src="" alt=""/>
              <span>寄件</span>
              </NavLink>
          </div>

          <div className="tab-item">
            <NavLink className="nav-link" to="">
              <img src="" alt=""/>
              <span>驿站</span>
              </NavLink>
          </div>

          <div className="tab-item">
            <NavLink className="nav-link" to="">
              <img src="" alt=""/>
              <span>我</span>
              </NavLink>
          </div>

        </div>
      </div>
    );
  }
}
 
export default App;

