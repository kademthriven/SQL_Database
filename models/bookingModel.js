const { DataTypes } = require('sequelize');
const sequelize = require('../utils/db-connections');

const Booking = sequelize.define('Booking',{
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    seatNumber:{
        type:DataTypes.INTEGER
    }
},{
    timestamps:false
});

module.exports = Booking;