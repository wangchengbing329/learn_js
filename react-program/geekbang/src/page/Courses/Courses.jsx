import React, { Component } from 'react';
import { BrowserRouter as Link, Route } from 'react-router-dom';
import axios from 'axios';
import './courses.css'
class Courses extends Component {
    state = {
        nav: [],
        list: []
    }
    componentDidMount() {
        const { nav, list } = this.state;
        axios.get('https://www.easy-mock.com/mock/5ca457ff4767c3737055c8c2/example/geekbang/course')
            .then(res => {
                console.log(res.data.data)
                this.setState({
                    nav: res.data.data.nav,
                    list: res.data.data.list
                })
            })
    }
    render() {
        const { nav, list } = this.state
        return (
            <div className="course">

                <h1 style={{ margin: "0.2rem 1rem" }}>讲堂</h1>
                <div className="link-wrapper">
                    {nav.map(item => {
                        return (
                            <div className="link" key={item.id}>
                                <Link path={'/courses/' + item.id}>
                                    <img src={item.icon} alt="" className="course-icon" />
                                    <div className="course-name">{item.name}</div>
                                </Link>
                            </div>
                        )
                    })}
                </div>

                <div className="course-content">
                    {
                        list.map((item, index) => {
                            return (
                                // 内容头部

                                <div className="course-content-title" key={index}>
                                    <div className="course-content-hearder">
                                    <div className="course-title">{item.title}</div>
                                    <span className="more">{item.more}</span>
                                        </div>
                                    <div className="course-cover">{item.category.map(it => {
                                        return (

                                            <div className="every-content" key={it.id}>
                                                <div className="column-img">

                                                <img className="author_cover" src={it.column_cover_small} alt=""/>
                                                </div>
                                                <div className="column_detail">
                                                    <span className='column_detail_title'>{it.column_title}</span>
                                                    <div>

                                                    <span className="author_name">{it.author_name}</span>
                                                    <span className="intro">{it.author_intro}</span>
                                                    <div className="unit">{it.column_unit}|{it.sub_count}人已学习</div>
                                                    <div style={{display:it.price_type ===1?'none':'inline'}}>{it.price_type===2?'限时':''|it.price_type===3?'拼团':''}</div>
                                                    <span className="column_price_sale">￥{it.column_price_sale/ 100 }</span>
                                                    <span className="cloumn_price_market" style={{display:it.column_price_market === it.column_price_sale?'none':'inlineBlock' }}>￥{it.column_price_market/ 100 }</span>
                                                    <span className="read">试读</span>
                                                    </div>

                                                </div>
                                            </div>
                                        )
                                    })}</div>
                                </div>



                            )
                        }
                        )
                    }
                </div>



            </div>
        );
    }
}

export default Courses;