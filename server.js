const express = require("express");
const connectDB = require("./src/config/db");
const usersRouters = require ("./src/routers/users.routers");

const PORT = process.env.PORT || 3000;

const api = express();
api.use(express.json()); 

api.use("/users", usersRouters);

connectDB();

api.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
 