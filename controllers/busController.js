const Bus = require('../models/busModel');


// Add Bus
const addBus = async (req,res)=>{
    try{

        const {busNumber,totalSeats,availableSeats} = req.body;

        const bus = await Bus.create({
            busNumber,
            totalSeats,
            availableSeats
        });

        console.log("Bus inserted");

        res.status(201).send(`Bus ${bus.busNumber} added successfully`);

    }catch(err){
        console.log(err.message);
        res.status(500).send(err.message);
    }
};


// Get buses with available seats
const getAvailableBuses = async (req,res)=>{
    try{

        const {seats} = req.params;

        const buses = await Bus.findAll({
            where:{
                availableSeats:{
                    [require('sequelize').Op.gt]: seats
                }
            }
        });

        res.status(200).send(buses);

    }catch(err){
        console.log(err.message);
        res.status(500).send(err.message);
    }
};


module.exports = {
    addBus,
    getAvailableBuses
};