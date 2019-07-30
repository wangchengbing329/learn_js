import React, { Component } from 'react';
import {BrowserRouter as Link,Route} from 'react-router-dom';
import axios from 'axios';
class Courses extends Component {
    state = { 
        nav:[]
     }
     componentDidMount(){
         const nav = this.state.nav;
        axios.get('https://www.easy-mock.com/mock/5ca457ff4767c3737055c8c2/example/geekbang/course')
        .then(res=>{
            this.setState({
                nav:res.data.data.nav
            })
        })
     }
    render() { 
        const {nav} = this.state
        return (  
            <div className="course">
   <h1 style={{margin:"0.2rem 1rem"}}>讲堂</h1> 
   <div className="link-wrapper">
  {nav.map(item=>{
      return (
<div className="link" key={item.id}>
    <Link path={'/courses/' + item.id}>
        <img src={item.icon} alt="" className="course-icon"/>
        <div className="course-name">{item.name}</div>
    </Link>
</div>
      )
  })}
   </div>


            </div>
        );
    }
}
 
export default Courses;