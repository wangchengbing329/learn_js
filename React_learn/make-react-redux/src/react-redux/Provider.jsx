import React, { Component } from 'react';
import {Provider} from './context'
class EnhancedProvider extends Component {
    state = {}
    constructor() {
        super (props)
        const {store} = this.props;
        store:store.getState

    }
    render() { 
        const {store} = this.props;
        const {state,dispatch} = this.state
        return ( 
            <Provider value={store}>
                {/* 里面应该还有东西 */}
                {this.props.children}
            </Provider>
         );
    }
}
 
export default EnhancedProvider;