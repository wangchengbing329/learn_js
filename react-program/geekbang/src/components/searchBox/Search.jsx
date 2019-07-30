import React from 'react';
import './search.css'
function Search (props) {
    return (
        <div className="search-box" >
            <img className="search-icon" src={require('../../assets/img/search.png')} alt=""/>
            <input disabled={props.select} className="search-input" type="text" placeholder="搜索课程、课堂内容、每日一课等"/>
        </div>
    )
}
export default Search