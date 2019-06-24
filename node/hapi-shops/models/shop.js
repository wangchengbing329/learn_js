// import { sequelize } from ".";

// mvc model 
// mysql 数据 row =>object
// orm sequelize 
module.exports = (sequelize ,DataType)=> sequelize.define(
    'shops',{
        id:{
            type:DataType.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        name:{
            type:DataType.INTEGER,
            allowNull :false
        },
        thumb_url:DataType.STRING
    },
    {
        tableName:'shops'
    }
)