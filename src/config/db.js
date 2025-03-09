const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect(
            process.env.MONGO_URI || "mongodb+srv://dhoha34:dhoha@cluster0.b2csp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
        );
        console.log("Connected to database !");
        
    } catch (error) {
        console.log("Connection failed!");
    }
};

module.exports = connectDB;