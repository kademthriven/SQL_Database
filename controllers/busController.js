const db = require('../utils/db-connections');


// Add Bus
const addBus = (req,res)=>{
    const {busNumber,totalSeats,availableSeats} = req.body;

    const insertQuery = 'INSERT INTO Buses (busNumber,totalSeats,availableSeats) VALUES (?,?,?)';

    db.execute(insertQuery,[busNumber,totalSeats,availableSeats],(err)=>{
        if(err){
            console.log(err.message);
            res.status(500).send(err.message);
            db.end();
            return;
        }

        console.log("Bus inserted");

        res.status(200).send(`Bus ${busNumber} added successfully`);
    })
}


// Get buses with available seats
const getAvailableBuses = (req,res)=>{
    const {seats} = req.params;

    const selectQuery = 'SELECT * FROM Buses WHERE availableSeats > ?';

    db.execute(selectQuery,[seats],(err,result)=>{
        if(err){
            console.log(err.message);
            res.status(500).send(err.message);
            db.end();
            return;
        }

        res.status(200).send(result);
    })
}


module.exports = {
    addBus,
    getAvailableBuses
}