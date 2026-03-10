const connection = require('../utils/db-connections');
const db = require('../utils/db-connections');


// Get all users
const getUsers = (req,res)=>{
    const selectQuery = 'SELECT * FROM Users';

    db.execute(selectQuery,(err,result)=>{
        if(err){
            console.log(err.message)
            res.status(500).send(err.message);
            connection.end();
            return;
        }

        res.status(200).send(result);
    })
}


// Add user
const addUser = (req,res)=>{
    const {email , name} = req.body;

    const insertQuery = 'INSERT INTO Users (email,name) VALUES (?,?)';

    db.execute(insertQuery,[email,name], (err)=>{
        if(err){
            console.log(err.message)
            res.status(500).send(err.message);
            connection.end();
            return;
        }

        console.log("Value has been inserted")

        res.status(200).send(`User with name ${name} successfully added`);
    })
}


// Update user
const updateUser = (req,res)=>{
    const {id} = req.params;
    const {email,name} = req.body;

    const updateQuery = 'UPDATE Users SET email=?, name=? WHERE id=?';

    db.execute(updateQuery,[email,name,id],(err)=>{
        if(err){
            console.log(err.message)
            res.status(500).send(err.message);
            connection.end();
            return;
        }

        res.status(200).send(`User with id ${id} updated successfully`);
    })
}


// Delete user
const deleteUser = (req,res)=>{
    const {id} = req.params;

    const deleteQuery = 'DELETE FROM Users WHERE id=?';

    db.execute(deleteQuery,[id],(err)=>{
        if(err){
            console.log(err.message)
            res.status(500).send(err.message);
            connection.end();
            return;
        }

        res.status(200).send(`User with id ${id} deleted successfully`);
    })
}


// Export functions
module.exports = {
    getUsers,
    addUser,
    updateUser,
    deleteUser
}