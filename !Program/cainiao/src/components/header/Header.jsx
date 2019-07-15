import React, { Component } from 'react';
class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="header">
                <span className="dayNow">
                    <img src="" alt="" className="dayPic" />
                    <span className="dayTitle">     </span>
                        
                        </span>
                <span className="message">
                    <img src="" alt="" className="messagePic" />
                    <span className="messageTitle">  消息 </span>
                    </span>
            </div>
        );
    }
}

export default Header;