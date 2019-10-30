const express = require('express');
const app = express();
app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/' + 'getTest.html')
})
app.get('/get_test',(req,res)=>{
    let response = {
        'stuName':req.query.stuNam,
        'stuNumber':req.query.stuNum,
    }
    console.log(response);
    res.end(JSON.stringify(response))
})
app.listen(3000,()=>{
    console.log('服务器启动了')
})