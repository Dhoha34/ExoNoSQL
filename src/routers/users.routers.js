const express = require('express');
const usersController = require('../controllers/users.controller');
const router = express.Router();

router.get("/", usersController.getAll);
router.post("/", usersController.createUsers);
router.get("/:id", usersController.getById);
// router.put("/users/:id", usersController.updateUser);
// router.delete("/users/:id", usersController.deleteUser);

module.exports = router;