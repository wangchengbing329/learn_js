const fs = require('fs');
fs.open('a.txt','r+',(err,fd)=>{
    if(err){
        console.log('糟糕，打开文件失败')
    }
    console.log('文件打开成功');
    console.log('准备读取文件');
    // 创建一个大小为1204字节的缓冲区
    const buf = Buffer.alloc(1024);
    // 异步读取文件
    fs.read(fd,buf,0,buf.length,0,(err,B,buf)=>{
        if(err){
            console.log('读取文件失败')

        }
        console.log(B + '字节被读取')
        if(B>0){
            console.log(buf.slice(0,B).toString());

        }
        // 异步关闭文件
        fs.close(fd,(err)=>{
            if(err){
                console.log('关闭文件失败');

            }
            console.log('关闭文件成功   ')
        })
    })
})