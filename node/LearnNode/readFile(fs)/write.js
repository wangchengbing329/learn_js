const fs = require('fs');

/**
 * 方式一
 */
// fs.open('a.txt','a',(err,fd)=>{
//     if(err){
//         console.log(err)
//     }
//     console.log('打开文件成功')
//     console.log(fd)
//     console.log('准备写入文件：')
//     // const buf = Buffer.alloc();
//     const buf = Buffer.from(new String('今天天气很好'))
//     fs.write(fd,buf,0,buf.length,0,(err,bytes,buf)=>{
//         if(err){
//             console.log('写入文件失败')
//             throw err;
//         }
//         console.log('写入文件成功');
//         console.log(bytes +  '字节被写入')
//         console.log(buf.slice(0,bytes).toString());
//         fs.close(fd,err=>{
//             if(err){
//                 console.log('文件关闭失败');
//             }
//             console.log('文件关闭成功')
//         })
//     })
// })

/**
 * 方式二
 */

fs.open('a.txt','a',(err,fd)=>{
    if(err){
        console.log(err)
    }
    console.log('打开文件成功')
    console.log(fd)
    console.log('准备写入文件：')
    // const buf = Buffer.alloc();
    // const buf = Buffer.from(new String('今天天气很好'))
    const data = '奋斗的青春'
    fs.write(fd,data,0,'utf-8',(err,bytes,buf)=>{
        if(err){
            console.log('写入文件失败')
            throw err;
        }
        console.log('写入文件成功');
        console.log(bytes +  '字节被写入')
        // console.log(buf.slice(0,bytes).toString());
        console.log(buf)
        fs.close(fd,err=>{
            if(err){
                console.log('文件关闭失败');
            }
            console.log('文件关闭成功')
        })
    })
})