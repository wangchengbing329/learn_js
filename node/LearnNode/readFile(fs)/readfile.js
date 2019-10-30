/**
 * 同步阻塞阻塞
 */
// const fs = require('fs')
// const data =fs.readFileSync('a.txt');
// console.log(data.toString())
// console.log('study')

/**
 * 异步非阻塞方式
 */
const fs = require('fs');
fs.readFile('a.txt',function(err,data){
    if(err){
        return console.log(err)
    }
    console.log(data.toString());
})
console.log('good')