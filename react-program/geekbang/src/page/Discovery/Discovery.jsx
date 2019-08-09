import React, { Component } from 'react';
import {  Link } from 'react-router-dom'
import axios from 'axios'
import Search from '../../components/searchBox/Search'
// import   from 
import { Carousel,Avatar,Icon } from 'antd';
import './discovery.css'
import 'antd/dist/antd.css'
// import searchContent from '../searchContent/searchContent';
class Discovery extends Component {
    state = {
        disabled: 'disabled',
        bannerList: [],
        isPlay:true,
        audioDesc:'60'
    }

    componentDidMount() {
        const bannerList = this.state.bannerList;
        axios.get('https://www.easy-mock.com/mock/5ca457ff4767c3737055c8c2/example/geekbang/discovery')
            .then((res) => {
                this.setState({
                    bannerList: res.data.data.bannerlist
                })

            })
    }
    render() {

        let {disabled,isPlay,audioDesc} = this.state



        return (


            <div>
                <h1 style={{ margin: "0.2rem 1rem" }}>发现</h1>


                <Link to={{ pathname: '/search' }} >
                    <Search select={disabled} > </Search>

                </Link>
                <div className="carousel">
                    <Carousel dotPosition="bottom" autoplay="true"  >
                        {
                            this.state.bannerList.map(item => {
                                return (
                                    <div key={item} className="carouserl-wrapper">
                                        <img src={item} alt="" />

                                    </div>
                                )
                            })
                        }
                    </Carousel>
                </div>

                        <div className="audio-content">
                            <div className="audio-text">
                                <div className="audio-header">

                                <div className="audio-title">卖桃者说</div>
                               <div className="arrow-right"></div>
                                </div>
                                <div className="audio-button">
                                    <img src={require('../../assets/img/play.png')} alt="" className="audio-img"/>
                                    <div className="audio-desc"><span>第{audioDesc}期 | </span>最近极客时间发布的几个新功能</div>
                                </div>
                            </div>
                            <Avatar src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"></Avatar>
                        </div>


            </div>

        );
    }
}

export default Discovery;