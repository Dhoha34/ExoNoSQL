const express = require("express");
const connectDB = require("./src/config/db");
require("dotenv").config();
const usersRouters = require ("./src/routers/users.router");
const authRouters = require("./src/routers/auth.router");

const PORT = process.env.PORT;

const api = express();
api.use(express.json()); 

api.use("/auth", authRouters);
api.use("/users", usersRouters);

connectDB();

api.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
 