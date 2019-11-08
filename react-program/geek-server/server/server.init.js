const glob = require('glob');
const  {resolve} = require('path');
exports.initSchema = () =>{
    glob.sync(resolve(__dirname,'../db/schema/','**/*.js')).forEach(require)
}