const User = require("../models/users.model");

const getAll = async (req, res) => {
    try {
      const allUsers = await User.find();
      res.status(200).json(allUsers);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
};

const createUsers = async (req, res) => {
    const user = new User({
      name: req.body.name,
      email: req.body.email,
      age: req.body.age,
      password: req.body.password,
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

const updateUsers = async (req, res) => {
    try {
      const userById = await User.findById(req.params.id);
        if (userById == null) {
          return res.status(404).json({ message: "User not found" });
        }
        if (req.body.name != null) {
          userById.name = req.body.name;
        }
        if (req.body.email != null) {
          userById.email = req.body.email;
        }
        if (req.body.age != null) {
          userById.age = req.body.age;
        }
        if (req.body.password!= null) {
          userById.password = req.body.password;
        }
        const updatedUsers = await userById.save();
        res.json(updatedUsers);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

const deleteUsers = async (req, res) => {
  try {
    const userById = await User.findById(req.params.id);
    if (userById == null) {
      return res.status(404).json({ message: "User not found" });
    }
    await userById.deleteOne(userById._id);
    res.json({ message: "User deleted" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
    getAll,
    createUsers,
    getById,
    updateUsers,
    deleteUsers,
}