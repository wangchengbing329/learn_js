//引入资源文件 
const express = require('express')
const path = require('path')
var createError = require('http-errors')
var cookieParser =require('cookie-parser')
var logger = require('morgan')
var indexRouter = require('./routes/index')//引入index.js 路由配置文件

// 引入user.js 路由配置文件
var userRouter = require('./routes/user.js')
const app =express() //用express 创建一个app 应用
