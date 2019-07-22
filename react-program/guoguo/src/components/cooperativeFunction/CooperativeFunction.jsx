import React, { Component } from 'react';
import {Router,Route,Link} from 'react-router-dom';
import Guojiang from '../../utils/assets/cute.png'
class CooperativeFunction extends Component {
    state = { 
        functions:[
            {
                pathName:'/guojiang',
                Ficon:Guojiang,
                Ftitle:'领裹酱'
            }

        ]
     }
    render() { 
        return ( 
            <Router>
                <div className="function-wrapped">

               
                {
                    functions.map(item=>{
                        return   (<div className="linkBox" style={{backgroundColor:item.bgc}}>
                            <Link to={}>
                            <img src={} alt="" className="function-img"/>
                            <span className="function-title">{}</span>
                            </Link>
                        </div>)
                    })
                }
       </div>

            </Router>
         );
    }
}
 
export default CooperativeFunction;