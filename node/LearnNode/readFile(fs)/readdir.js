const fs = require('fs');
fs.readdir('../http',(err,files)=>{
    if(err){
        throw err;
    }
    console.log(files)
})
