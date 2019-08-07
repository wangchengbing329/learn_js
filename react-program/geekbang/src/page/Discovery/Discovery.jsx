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
        isPlay:true
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

        let {disabled,isPlay} = this.state



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

                        <div className="audio-cotent">
                            <div className="audio-text">
                                <div className="audio-title"></div>
                                <div className="audio-button">
                                    <audio  onPause={isPlay} style ={{backgroundImage:isPlay?(require('../../assets/img/play.png')):(require('../../assets/img/playing.png'))}} src="http://www.9ku.com/play/551954.htm"></audio>
                                </div>
                            </div>
                        </div>


            </div>

        );
    }
}

export default Discovery;