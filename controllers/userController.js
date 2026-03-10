const User = require('../models/userModel');


// Create User
const addUser = async (req,res)=>{
    try{

        const {name,email} = req.body;

        const user = await User.create({
            name,
            email
        });

        res.status(201).send(user);

    }catch(err){
        console.log(err.message);
        res.status(500).send(err.message);
    }
};


// Get All Users
const getUsers = async (req,res)=>{
    try{

        const users = await User.findAll();

        res.status(200).send(users);

    }catch(err){
        console.log(err.message);
        res.status(500).send(err.message);
    }
};


// Get User By ID
const getUserById = async (req,res)=>{
    try{

        const {id} = req.params;

        const user = await User.findByPk(id);

        if(!user){
            return res.status(404).send("User not found");
        }

        res.status(200).send(user);

    }catch(err){
        console.log(err.message);
        res.status(500).send(err.message);
    }
};


// Update User
const updateUser = async (req,res)=>{
    try{

        const {id} = req.params;
        const {name,email} = req.body;

        const user = await User.findByPk(id);

        if(!user){
            return res.status(404).send("User not found");
        }

        await user.update({
            name,
            email
        });

        res.status(200).send("User updated successfully");

    }catch(err){
        console.log(err.message);
        res.status(500).send(err.message);
    }
};


// Delete User
const deleteUser = async (req,res)=>{
    try{

        const {id} = req.params;

        const user = await User.findByPk(id);

        if(!user){
            return res.status(404).send("User not found");
        }

        await user.destroy();

        res.status(200).send("User deleted successfully");

    }catch(err){
        console.log(err.message);
        res.status(500).send(err.message);
    }
};


module.exports = {
    addUser,
    getUsers,
    getUserById,
    updateUser,
    deleteUser
};

