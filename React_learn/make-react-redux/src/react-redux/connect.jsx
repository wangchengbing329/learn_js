import React, { Component } from 'react';
import {Consumer } from './context'
export default (mapStateToProps,mapDispatchToProps) =>(WrappedComponent)=>{
class ConnectdComponent extends Component {
    render () {
        return (
            <Consumer>
              {
                  (store)=>{
                    const state = store.getState();
                    const dispatch = store.dispatch;
                     let filterProps = {}
                    if(typeof mapDispatchToProps ==='fucntion'){
                        Object.assign(filterProps,mapDispatchToProps(dispatch))
                    }
                    if(typeof mapStateToProps ==='function'){
                        Object.assign(filterProps,mapStateToProps(state))
                    }
                   
                    return (
                        <WrappedComponent {...filterProps}></WrappedComponent>
                    )
                  }

              }   
            </Consumer>
          
        ) ;

    }
}
return ConnectdComponent;
}