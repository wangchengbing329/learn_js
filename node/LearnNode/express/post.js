const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const urlencodeParser = bodyParser.urlencoded({
    extended:false
})
app.get('/',(req,res)=>{
  
    res.sendFile(__dirname + '/' + 'getTest.html')
})

app.post('/post_test',urlencodeParser,(req,res)=>{
    let response = {
        'name':req.body.stuNam,
        'number':req.body.stuNum,
    }
    console.log(response)
    res.end(JSON.stringify(response))
})
app.listen(3000,()=>[
    console.log('连接成功')
])