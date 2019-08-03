import React, { Component } from 'react';
import { Avatar, Icon } from 'antd'
import './mine.css'
import axios from 'axios'
class Mine extends Component {
    state = {
        //         selections:[
        //             {id:'account',title:'账户',detail:'0.0'},
        //             {id:'buy',title:'已购',detail:''},
        //             {id:'shopToggether',title:'拼团',detail:''},
        //             {id:'group',title:'我的社群',detail:''},
        //             {id:'oneclass',title:'我的每日一课',detail:''},
        //             {id:'ticket',title:'礼券',detail:''},
        //             {id:'share',title:'分享有礼',detail:''},
        //             {id:'invite',title:'邀请好友',detail:'得30元'},
        //             {id:'help',title:'帮助与反馈',detail:''},
        //             {id:'setting',title:'设置',detail:''},
        // ]
        selections: []
    }
    componentDidMount() {
        const { selections } = this.state
        axios.get('https://www.easy-mock.com/mock/5ca457ff4767c3737055c8c2/example/geekbang/mine')
            .then((res) => {
                this.setState({
                    selections: res.data.data.selections
                })
            })
    }
    render() {
        const { selections } = this.state

        return (
            <div className="mine">
                {/* 头像账户 */}
                <div className="avatar">
                    <div className="avatar-wrapper">

                        <Avatar size={48} src="https://images.pexels.com/photos/2698844/pexels-photo-2698844.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"></Avatar>
                    </div>
                    <div className="info-wrapper">
                        <h2>给自己一个微笑</h2>
                        <div className="tel-number">183****3073</div>
                    </div>
                </div>
                {/* banner  */}
                <div className="banner">
                    <h2 className="banner-title">周末，快来和丁奇一起学习</h2>
                </div>
                {/* 功能选择 selections */}
                <div className="mine-selection">
                    {
                        selections.map(item => {
                            return (
                                <div className="selections-wrapper" key={item.id} style={{ marginTop: item.id === 'account' | item.id === 'group' | item.id === 'ticket' | item.id === 'help' ? '1rem' : '' }}>
                                    <div className="selections-background">
                                        <div className="selections-left">
                                            <img className="selections-img" src={(require('../../assets/img/' + item.id + '.png'))} alt="" />
                                            <span className="seletions-title">{item.title}</span>
                                        </div>
                                        <div className="selections-right">
                                            <span className="selections-detail">{item.detail}</span>
                                            <Icon type="right"></Icon>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>

            </div>
        );
    }
}

export default Mine;