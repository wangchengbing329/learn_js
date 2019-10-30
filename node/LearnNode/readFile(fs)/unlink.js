const fs = require('fs')
fs.unlink('a.txt',err=>{
    if(err){
        console.log(err)
    }
    console.log('文件删除成功')
})