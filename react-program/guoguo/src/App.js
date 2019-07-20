import React, { Component } from 'react';
import { BrowserRouter as  Router, Route, Switch,
   NavLink} from 'react-router-dom';
import Mine from './pages/mine/Mine'
import Index from './pages/index/Index'
import Stage from './pages/stage/Stage'
import GetPackage from './pages/getPackage/GetPackage'
import Mailing from './pages/mailing/Mailing'
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
      selecedTab:'',
      icons:[
        {
          path:'/',
          icon:index1,
          activeIcon:index2,
          key:'/',
          title:'首页',
          color:'grey',
          selectedColor:'blue'

        },
        {
          path:'/getPackage',
          icon:getPackage2,
          activeIcon:getPackage1,
          key:'getPackage',
          title:'取件',
          color:'grey',
          selectedColor:'blue'


        },
        {
          path:'/mail',
          icon:mail1,
          activeIcon:mail2,
          key:'mail',
          title:'寄件',
          color:'grey',
          selectedColor:'blue'


        },
        {
          path:'/stage',
          icon:stage1,
          activeIcon:stage2,
          key:'stage',
          title:'驿站',
          color:'grey',
          selectedColor:'blue'


        },
        {
          path:'/mine',
          icon:mine1,
          activeIcon:mine2,
          key:'mine',
          title:'我的',
          color:'grey',
          selectedColor:'blue'


        }
 ]
     }
     
  }
  componentWillReceiveProps(props){
// console.log(props)
  }
  handleChangeIcon =(index)=>{
    let  selectedTab = this.state.selecedTab
    console.log(index)
  let path = this.state.icons[ index].key
  this.setState({
    // [path]
    selecedTab:path
  })
  console.log(selectedTab)

  }

  render() { 
    let menu = this.state.icons
    return ( 
      
      
      <Router>
        <div className="App">
         {/* <Input prefix={<Icon type="search" ></Icon>}></Input> */}
        <div className="tabBar">

         
        {  menu.map((item,index)=>{
          return (<div className="tab-item" key={item.key} >
            <NavLink className="nav-link" to={item.path} onClick={this.handleChangeIcon.bind(this,index)}>
             <img className="tabImg" src={this.state.selecedTab === item.key?item.activeIcon:item.icon} alt=""/>
                <span style={{color:this.state.selecedTab === item.key?item.selectedColor:item.color}}>{item.title}</span>  
                </NavLink>
                </div>)
          })
        }
          

       

        </div>
        
       
          
            <Route path="/" exact component={Index} />
            <Route path="/getPackage" component={GetPackage} />
            <Route path="/mailling" component={Mailing} />
            <Route path="/state" component={Stage} />
            <Route path="/mine" component={Mine} />

           
          
        </div>
      
      </Router>
    );
  }
}
 
export default App;

