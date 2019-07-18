// import { Mongoose } from "mongoose";
// 物理 collection 的model 映射
const mongoose = require('mongoose')
const md5 = require('md5')
const {Schema} = mongoose;
const UserSchema = new Schema({
    type:String,
    enum:['superAdmin','admin','user'],
    default:'user',
username:{
    type:String,
    trim:true,
    unique:true
},email:{
    type:String,
    unique:true,
    trim:true,
    lowercase:true
},
password:{
    type:String,
    set:md5
},
description:{
    type:String,
    default:''
},
phone:{
    type:String,
    default:''
  
},
},{
    timestamps:{
        createdAt:'createAt',
        updatedAt:'updatedAt'
    },
toJSON:{
    transform(doc,ret){
        ret.id = ret._id
        delete ret.id
        delete ret.password
    }
},
minimize:false},
)
mongoose.model('User',UserSchema)