import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Route,NavLink} from 'react-router-dom';
import TabItem from './components/tabItem/TabItem';
import Discovery from './page/Discovery/Discovery';
import Courses from './page/Courses/Courses';
import Study from './page/Study/Study';
import Mine from './page/Mine/Mine';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      tabs:[
        {tabName:'发现',id:'discovery',path:'/'},
        {tabName:'课堂',id:'courses',path:'/courses'},
        {tabName:'学习',id:'study',path:'/study'},
        {tabName:'我的',id:'mine',path:'/mine'},
      ],
      current:0
     }
     
  }
  itemNav =(index)=>{
    this.setState({
      current:index
    })
  }
  render() { 
    var tabList = this.state.tabs.map((item,index)=>{
var tabUrl = index ===this.state.current?(require('./assets/img/' + item.id + '_active.png')):(require('./assets/img/' + item.id + '.png'))
var tabClass = index === this.state.current?"tab-active":"" 
return (
  

  
  <NavLink key={item.tabName} className="nav-link" to ={item.path} >

    <TabItem key={index} tabClass={tabClass} tabUrl={tabUrl} tabName={item.tabName} tabEvent={()=>{this.itemNav(index)}}></TabItem>
  </NavLink>
  
  
)
})
    return (
      <Router>
      <div>

     
        <div className="tarBar">
          {tabList}
        </div>
        <Route path='/' exact component={Discovery}></Route>
  <Route path='/courses'  component={Courses}></Route>
  <Route path='/study'  component={Study}></Route>
  <Route path='/mine'  component={Mine}></Route>
  
 </div>
   </Router>
     
      );
  }
}
 
export default App;


