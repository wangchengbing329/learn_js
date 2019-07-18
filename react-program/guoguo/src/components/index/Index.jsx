import React, { Component } from 'react';
import {Input,Icon} from 'antd'
import Header from '../header/Header'
import 'antd/dist/antd.css';
class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
        <Header></Header>
        <Input size='large' prefix={} disabled={true} placeholder="全网包裹一键查"></Input>

            </div>
         );
    }
}
 
export default Index;