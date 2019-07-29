import React, { Component } from 'react';
import './tabitem.css'
class TabItem extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="tab-item" onClick={this.props.tabEvent}>
                <div className="tab-item-icon">
                    <img className="tab-img" src={this.props.tabUrl} alt=""/>
                </div>
            <div className={`tab-item-name ${this.props.tabClass}`}>{this.props.tabName}</div>
            </div>
         );
    }
}
 
export default TabItem;