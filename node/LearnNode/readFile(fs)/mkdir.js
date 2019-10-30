const fs = require('fs')
console.log('创建目录 ./test')
fs.mkdir('./test/', {'recursive':true}, err=>{
    if(err){
        throw err
    }
    console.log('目录创建成功')
})