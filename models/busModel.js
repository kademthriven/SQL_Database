const { DataTypes } = require('sequelize');
const sequelize = require('../utils/db-connections');

const Bus = sequelize.define('Bus',{

    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },

    busNumber:{
        type:DataTypes.STRING
    },

    totalSeats:{
        type:DataTypes.INTEGER
    },

    availableSeats:{
        type:DataTypes.INTEGER
    }

},{
    timestamps:false
});

module.exports = Bus;