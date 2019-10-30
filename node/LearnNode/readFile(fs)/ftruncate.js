const fs = require('fs');
fs.open('./a.txt','r+',(err,fd)=>{
    if(err){
        console.log('打开文件失败')
    }
    console.log('打开文件成功')
    console.log('截取六字节的文件的内容，超出部分被去除')
    // console.log(fd)
    // console.log(fd.toString())
    const buf = Buffer.alloc(1024);
    fs.ftruncate(fd,6,err=>{
        if(err){
            console.log(err)
        }
        console.log('文件截取成功')
        console.log('读取相同的文件')
        fs.read(fd,buf,0,buf.length,0,(err,bytes)=>{
            if(err){
                console.log(err)
            }
            if(bytes>0){
                console.log(buf.slice(0,bytes).toString())
            }
            fs.close(fd,(err)=>{
                if(err){
                    console.log('糟糕，失败了')
                }
                console.log('关闭成功了')
            console.log(fd)
            
            })
        })
    })

})
