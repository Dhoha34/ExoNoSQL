const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
    try {
        await mongoose.connect(
            process.env.MONGO_URI 
        );
        console.log("Connected to database !");
        
    } catch (error) {
        console.log("Connection failed!");
    }
};

module.exports = connectDB;