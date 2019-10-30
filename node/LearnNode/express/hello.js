const express = require('express');
const app = express();
app.get('/',(req,res)=>{
    res.send('Hello World')
})
app.listen(3000,function(){
    console.log('服务器已经启动')
})