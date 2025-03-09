const User = require("../models/users.model");

const getAll = async (req, res) => {
    try {
        const allUsers = await User.find();
        res.json(allUsers);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const createUsers = async (req, res) => {
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        age: req.body.age,
    });
    try {
        const newUser = await user.save();
        res.status(201).json(newUser);  
    } catch(error) {
        res.status(400).json ({ message: error.message });
    }
};

const getById = async (req, res) => {
    try {
        const userById = await User.findById(req.params.id);
        if (userById == null) {
            return res.status(404).json({ message: "User not found" });
        } 
        res.json(userById);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getAll,
    createUsers,
    getById,
}