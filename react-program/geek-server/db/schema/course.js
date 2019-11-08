const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const courseSchema = new Schema({
  data:{

  nav:[{
    id:String,
    name:String,
    color:String,
    icon:String
  }],
  list:[{
    title:String,
    more:String,
    category:[{
      sub_count:Number,
      colum_type:Number,
      id:Number,
      colum_price_marcket:Number,
      colum_bgcolor:String,
      colum_title:String,
      column_cover_small:String,
      column_cover:String,
      had_sub:Boolean,
      channel_back_amount:Number,
      price_type:Number,
      column_unit:String,
      is_experience:Boolean,
      column_ctime:Number,
      update_frequency:String,
      is_onboard:Boolean,
      author_intro:String,
      column_price_sale:Number,
      column_sku:Number,
      column_cover_wxlite:String,
      column_price:Number,
      is_channel:Boolean,
      author_name:String,
      column_subtitle:String
    }]
  }]
}
},{collection:'course'})

mongoose.model('Course',courseSchema)