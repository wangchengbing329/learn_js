const express = require('express');
const app = express();
app.get('/',(req,res)=>{
    console.log('get请求')
    res.send('hello,我是get请求');
})
app.post('/',(req,res)=>{
    console.log('post请求')
    res.send('hello,我是post请求');
})
app.get('/index',(req,res)=>{
    console.log('get /index请求')
    res.send('hello,我是get请求index页面');
})
app.get('/ab*cd',(req,res)=>{
    console.log('/ab*cd请求')
    res.send('hello,我是正则请求');
})
app.listen(3000,()=>{
    console.log('lianjie ')
})