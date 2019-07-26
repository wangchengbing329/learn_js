import React, { Component } from 'react';
import RouterContext  from './RouterContext' 
class Router extends Component {
    constructor(props){
        super(props);
        this.state = {
            location:props.history.location
        }
    }
    render() { 
        return ( 
<RouterContext.Provider children ={this.props.children} value={{history:this.props.history, location:this.state.location}}>

</RouterContext.Provider>
         );
    }
}
 
export default Router;