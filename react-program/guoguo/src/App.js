import React, { Component } from 'react';
import { BrowserRouter as  Router, Route, Switch,
   NavLink} from 'react-router-dom';
import Mine from './components/mine/Mine'
import Index from './components/index/Index'
import Stage from './components/stage/Stage'
import GetPackage from './components/getPackage/GetPackage'
import Mailing from './components/mailing/Mailing'
import index1 from './utils/assets/index1.png'
import index2 from './utils/assets/index2.png'
import getPackage1 from './utils/assets/getPackage1.png'
import getPackage2 from './utils/assets/getPackage2.png'
// import getPackage1 from './utils/assets/getPackage1.png'
import stage1 from './utils/assets/stage1.png'
import stage2 from './utils/assets/stage2.png'
import mail1 from './utils/assets/mail1.png'
import mail2 from './utils/assets/mail2.png'
import mine1 from './utils/assets/mine1.png'
import mine2 from './utils/assets/mine2.png'
import './App.css'








// import {Icon,Input} from 'antd'
// import 'antd/dist/antd.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      icons:[index1,getPackage2,mail1,stage1,mine1],
      slectedIcons:[index2,getPackage1,mail2,stage2,mine2],
      selected:false,
      index:0

     }
  }
  render() { 
    return ( 
      
      
      <Router>
        <div className="App">
         {/* <Input prefix={<Icon type="search" ></Icon>}></Input> */}
        <div className="tabBar">

          <div className="tab-item" onClick={this.handleChangeIcon} >
            <NavLink className="nav-link" exact to="/"  activeClassName="">
             <img className="tabImg" src={this.state.icons[0]} alt=""/>
                <span style={{color:'grey'}}>首页</span>  
                </NavLink>
          </div>

          <div className="tab-item" onClick={this.handleChangeIcon}>
            <NavLink className="nav-link" to="/getPackage">
              <img className="tabImg" src={this.state.icons[1]} alt=""/>
               <span  style={{color:'grey'}} >取件</span> 
              </NavLink>
          </div>

          <div className="tab-item" onClick={this.handleChangeIcon}>
            <NavLink className="nav-link" to="/mailing">
              <img className="tabImg" src={this.state.icons[2]} alt=""/>
            <span  style={{color:'grey'}}>寄件</span>
          
              </NavLink>
          </div>

          <div className="tab-item" onClick={this.handleChangeIcon}>
            <NavLink className="nav-link" to="/stage">
              <img className="tabImg" src={this.state.icons[3]} alt=""/>
            <span  style={{color:'grey'}}>驿站</span> 
              </NavLink>
          </div>

          <div className="tab-item" onClick={this.handleChangeIcon}>
            <NavLink className="nav-link" to="/mine">
              <img className="tabImg" src={this.state.icons[4]} alt=""/>
                 <span  style={{color:'grey'}}>我</span> 
              </NavLink>
          </div>

        </div>
        <div className="tab-view" >
       
          <Switch>
            <Route path="/" component={Index} />
            <Route path="/getPackage" component={GetPackage} />
            <Route path="/mailling" component={Mailing} />
            <Route path="/state" component={Stage} />
            <Route path="/mine" component={Mine} />

           
          </Switch>
        </div>
      </div>
      </Router>
    );
  }
}
 
export default App;

