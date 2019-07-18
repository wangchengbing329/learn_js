import React, { Component } from 'react';
import home from '../../utils/assets/home.png'
import message from '../../utils/assets/message.png'

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            week:['周一','周二','周三','周四','周五','周六','周日']
        }
    }
    render() {
    let    week = this.state.week
        var date = new Date()
        // console.log(date.getDay())
        return (
            <div className="header">
                <span className="dayNow">
                    <img src={home} alt="" className="dayPic" />
                    <span className="dayTitle">{week[date.getDay()-1]} </span>
                        
                        </span>
                <span className="message">
                    <img src={message} alt="" className="messagePic" />
                    <span className="messageTitle">  消息 </span>
                    </span>
            </div>
        );
    }
}

export default Header;