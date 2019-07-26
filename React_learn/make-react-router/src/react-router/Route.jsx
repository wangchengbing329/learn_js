import React, { Component } from 'react';
import RouterContext from './RouterContext'
import matchPath from './matchPath'

class Route extends Component {
    
    render() { 
        return ( 
            <RouterContext.Consumer >
                {
                    (context)=>{
                        // window.location
                        const location = context.location
                        const match = matchPath (location,this.props);
                        const {component :Com} = this.props
                        return (
                            <RouterContext.Provider>
                                {
                                    match&& <Com/>
                                }
                            </RouterContext.Provider>
                        )
                    }
                }
            </RouterContext.Consumer>
         );
    }
}
 
export default Route;