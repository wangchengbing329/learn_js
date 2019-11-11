const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const discoverySchema = new Schema({
  data:{
    bannerlist:{
      type:[String],
      default:[]
    }
  }
},{collection:'discovery'})
mongoose.model('Discovery',discoverySchema)