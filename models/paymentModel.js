const { DataTypes } = require('sequelize');
const sequelize = require('../utils/db-connections');

const Payment = sequelize.define('Payment',{
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    amountPaid:{
        type:DataTypes.DECIMAL
    },
    paymentStatus:{
        type:DataTypes.STRING
    }
},{
    timestamps:false
});

module.exports = Payment;