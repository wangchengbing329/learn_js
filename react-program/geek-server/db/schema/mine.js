const mongoose = require('mongoose');
const Schema =  mongoose.Schema;
const mineSchema = new Schema({
  data:{
    selections:[{
      id:String,
      title:String,
      detail:String
    }]
  }
},{collection:'mine'})

mongoose.model('Mine',mineSchema)