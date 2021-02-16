const sequelize=require('../../config/db.config');
const { DataTypes } = require('sequelize');

const Employee=sequelize.define('employees',
{
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    last_name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false
    }
});


module.exports=Employee;

