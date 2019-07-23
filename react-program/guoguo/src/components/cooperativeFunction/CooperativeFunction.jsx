import React, { Component } from 'react';
import {Router,Route,Link} from 'react-router-dom';
import GuojiangIcon from '../../utils/assets/cute.png'
import FriendsIcon from '../../utils/assets/friends.png'
import moveHomeIcon from '../../utils/assets/movehome.png';
import RentIcon from '../../utils/assets/rent.png'
import AllIcon from '../../utils/assets/all.png'
import ShowAll  from '../showAll/ShowAll'
import Friends from '../../pages/index/Friends/friends'
import Rent from '../../pages/index/Rent/Rent'
import MoveHome from '../../pages/index/moveHome/MoveHome'
import GuoJiang from '../../pages/index/guoJiang/GuoJiang'

class CooperativeFunction extends Component {
    state = { 
        status:false,
        functions:[
            {
                pathName:'/guojiang',
                Ficon:GuojiangIcon,
                Ftitle:'领裹酱',
                bgc:'#ff9445',
                function:'',
                component:GuoJiang
            },
            {
                pathName:'/friends',
                Ficon:FriendsIcon,
                Ftitle:'好友代取',
                bgc:'#41b0fd',
                function:'',
                component:Friends
            }, {
                pathName:'/rent',
                Ficon:RentIcon,
                Ftitle:'数码租赁',
                bgc:'#fd8679',
                function:'',
                component:Rent
            },{
                pathName:'/moveHome',
                Ficon:moveHomeIcon,
                Ftitle:'蓝犀牛搬家',
                bgc:'#40b0ff',
                function:'',
                component:MoveHome
            }, 
            {
                pathName:'/all',
                Ficon:AllIcon,
                Ftitle:'全部',
                bgc:'#ffd54a',
                function:this.handleChangeStatus,
                component:ShowAll
            },
           




        ]
     }
     handleChangeStatus = ()=>{
         let status = this.state.status;
         this.setState({
             status:true
         })
     }
    render() { 
    
        let functions = this.state.functions   
        return ( 
            <Router>
                <div className="function-wrapped">

               
                {
                    functions.map((item,index)=>{
                        return   (
                        <Router>
                        <div key={index} className="linkBox" style={{backgroundColor:item.bgc}} onClick={this.item.function}>
                            <img src={item.Ficon} alt="" className="function-img"/>
                            <span className="function-title">{item.Ftitle}</span>
                          
                          <div>
                          {
                              this.state.status?<ShowAll></ShowAll>:
                              <Link to={item.pathName}></Link>

                          }   
                              </div> 
                            
                            
                        </div>
                        
                            <Route path={item.pathName} component={item.component}></Route>

                         
                        </Router>
                        )
                    })
                }
       </div>

            </Router>
         );
    }
}
 
export default CooperativeFunction;