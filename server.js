const express = require("express");
const connectDB = require("./src/config/db");

const PORT = process.env.PORT || 3000;


const api = express();
api.use(express.json()); 

connectDB();


api.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
 