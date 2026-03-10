const { DataTypes } = require('sequelize');
const sequelize = require('../utils/db-connections');

const User = sequelize.define('User',{
    
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },

    name:{
        type:DataTypes.STRING
    },

    email:{
        type:DataTypes.STRING
    }

},{
    timestamps:false
});

module.exports = User;