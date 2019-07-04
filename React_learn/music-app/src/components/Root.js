import React, { Component } from 'react';
import {Provider} from 'react-redux';
import store from '../redux/store'
import App from './App'

class Root extends Component {
    state = {  }
    render() { 
        return ( 
        <Provider store = {store}>
            <App></App>
        </Provider>
         );
    }
}
 
export default Root;