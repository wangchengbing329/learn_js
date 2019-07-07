import React, { Component } from 'react';
import {connect} from 'react-redux';
import ListItem from '../components/ListItem';

const mapStateToprops = (state) =>{
    return  lists = state.list
}
export default connect (mapStateToprops,null)(ListItem)