const fs = require('fs')
fs.stat('a.txt',(err,stats)=>{
    console.log(stats.isFile())
})