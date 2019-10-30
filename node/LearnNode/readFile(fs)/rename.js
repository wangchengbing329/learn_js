const fs = require('fs')
fs.rename('../Learn','learnNode',err =>{
    if(err){
        console.log(err)
    }
    console.log('文件修改成功')
})