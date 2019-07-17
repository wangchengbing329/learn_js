import React, { Component } from 'react';
import home from '../../utils/assets/home.png'
import message from '../../utils/assets/message.png'

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="header">
                <span className="dayNow">
                    <img src={home} alt="" className="dayPic" />
                    <span className="dayTitle">周     </span>
                        
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