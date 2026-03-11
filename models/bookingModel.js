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
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Users',
            key: 'id'
        }
    },
    busId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Buses',
            key: 'id'
        }
    }
},{
    timestamps:false
});

module.exports = Booking;