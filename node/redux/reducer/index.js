const {combineReducers} = require('redux')
const  filmReducer =require('./filmReducer.js')
const  filmFilterReducer =require('./filmFilterReducer.js')

module.exports = combineReducers({
    films:filmReducer,
    filter:filmFilterReducer
})