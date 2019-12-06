const mongoose = require('mongoose');
const db = 'mongodb://127.0.0.1:27017/geekBang';
mongoose.Promise =global.Promise;

exports.connect = () =>{
  const tryConnect = ()=>{

  return  mongoose.connect(db,{useNewUrlParser:true,useUnifiedTopology:true,useFindAndModify:true,});
  } 
  tryConnect();
  let maxConnectCount = 0;
  
  return new Promise((resolve,reject)=>{
    mongoose.connection.on('disconnected',()=>{
      console.log('******数据库断开连接********');
      if(maxConnectCount<3){
        tryConnect();
        maxConnectCount++
      }else{
        reject();
        throw new Error('数据库出现了问题，请联系相关人员进行维护')
      }
    })


    // 当数据库出现问题时
    mongoose.connection.on('error',()=>{
      console.log('数据库出现错误！*****')
      if(maxConnectCount<3){
        tryConnect();
        maxConnectCount++;
      }else{
        throw new Error('数据库出现错误，请联系相关人员进行维护！')
      }
    })


    // 当连接打开的时候
    mongoose.connection.once('open',()=>{
      console.log('MongoDB connected Successfuly!');
      resolve()
    })
  })
}