const fs = require('fs')
// fs.writeFile('a.txt','我是新写入的内容',err=>{

/**
 * 新添加的flag项
 */
fs.writeFile('a.txt','我是新写入的内容' ,{'flag':'a'},err=>{

if(err){
    console.log('写入文件失败')

}
console.log('写入成功')
fs.readFile('a.txt','utf-8',(err,data)=>{
    if(err){
        throw err
    }
    console.log(data)
})
})

/*
另外一种追加文件的方式
*/
fs.appendFile('a.txt','asiainfo anywhere','utf-8',err=>{
    if(err) {
        console.log(err)
    }
    fs.readFile('a.txt',(err,data)=>{
        if(err){
            console.log(err )
        }
        console.log(data.toString())
    })
})