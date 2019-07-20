import React, { Component } from 'react';
import {Input,Icon} from 'antd'
import Header from '../../components/header/Header'
import 'antd/dist/antd.css';
import Selections from '../../components/selections/selection'
class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
        <Header></Header>
        <Input  color={{background:'grey' ,width:'85%'}} prefix={<Icon type="search"></Icon>} disabled={true} placeholder="全网包裹一键查"></Input>
            <Selections></Selections>
            </div>
         );
    }
}
 
export default Index;