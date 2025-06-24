const express = require('express');
const usersController = require('../controllers/users.controller');
const router = express.Router();
const verifyToken = require("../services/auth");

router.get("/", usersController.getAll);
router.post("/", usersController.createUsers);
router.get("/:id", usersController.getById);
router.put("/:id", verifyToken, usersController.updateUsers);
router.delete("/:id", verifyToken, usersController.deleteUsers);

module.exports = router;