const fs = require('fs');
fs.open('./a.txt','r+',(err,fd)=>{
    if(err){
        console.log('打开文件失败')
    }
    console.log('打开文件成功')
    console.log(fd)
    console.log(fd.toString())
fs.close(fd,(err)=>{
    if(err){
        console.log('糟糕，失败了')
    }
    console.log('关闭成功了')
console.log(fd)
})
})
