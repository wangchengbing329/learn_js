const express = require('express');
const app = express();
app.engine('html',require('express-art-template'));
app.get('/',(req,res)=>{
    res.render('index.html');

})
app.get('/register',(req,res)=>{
    res.render('register.html');
})

app.listen(3000,()=>{
    console.log('连接成功')
})