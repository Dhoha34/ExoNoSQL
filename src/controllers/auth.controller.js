const User = require("../models/users.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();


const register = async(req, res) => {
  try {
    const { name, email, age, password } = req.body;
    const existUser = await User.findOne({ email });

    if(existUser) {
      return res.status(400).json({ message : "This email is already usued"});
    }
    const user = await User.create({ name, email, age, password });
    res.status(201).json({ message: "User registered", user }); 
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).json({ message: "Server Error" });
  }
}

const login = async(req,res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid Credentials" });
    }
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      return res.status(400).json({ message: "Invalid Credentials" });
    }
    const token = jwt.sign({ userId: user._id }, process.env.KEY, {
      expiresIn: "2d"
    });
    res.json({ token })
  } catch (error) {
    console.error("Error logging in", error);
    res.status(500).json({ message: "Server Error" });
  }
  
}


module.exports = {
  register,
  login,
}