const fs = require('fs');
fs.rmdir('./test',err=>{
    if(err){
        console.log('移除失败');

    }
    console.log('移除成功')
})