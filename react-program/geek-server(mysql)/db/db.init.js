const Sequelize = require('sequelize');
Sequelize.Promise = global.Promise;
exports.connect = ()=>{


const sequelize = new Sequelize('geek','root','123456',{
  host:'localhost',
  dialect: 'mysql',
  pool:{
    max:5,
    min:0,
    idle:10000
  }
})
sequelize.authenticate().then(()=>{
  console.log('Connection has been established successfully.')
}).catch((err)=>{

  console.error('Unable to connect to the database:',err)
}
)
}
