import React, { Component } from 'react';
import {Route,Link} from 'react-router-dom'
import axios from 'axios'
import SearchContent from '../searchContent/SearchContent'
import Search from '../../components/searchBox/Search'
// import   from 
import {Carousel} from 'antd';
import './discovery.css'
import 'antd/dist/antd.css'
// import searchContent from '../searchContent/searchContent';
class Discovery extends Component {
    state = { 
       disabled:'disabled',
        bannerList:[]
     }
    
     componentDidMount() {
     const bannerList = this.state.bannerList;
    axios.get('https://www.easy-mock.com/mock/5ca457ff4767c3737055c8c2/example/geekbang/discovery')
    .then((res)=>{
        this.setState({
            bannerList : res.data.data.bannerlist
        })
        
    })
     }
    render() { 
        
        let disabled = this.state.disabled 
        
        
       
        return ( 
            
            
            <div>
             <h1 style={{margin:"0.2rem 1rem"}}>发现</h1> 
        
        
                 <Link to={{pathname:'/search'}} >
             <Search select={disabled} > </Search>
             
             </Link>
        
            
            
             

             <div className="carousel">
            <Carousel dotPosition="bottom" autoplay="true"  >
                {
                    this.state.bannerList.map(item=>{
                        return(
                            <div key={item} className="carouserl-wrapper">
                            <img  src={item} alt=""/>

                            </div>
                        )
                    })
                }
            </Carousel>
            </div> 
            

            <Route  path="/search"  component={SearchContent}></Route>
            
            </div>
              
         );
    }
}
 
export default Discovery;