const express = require('express');
const usersController = require('../controllers/users.controller');
const router = express.Router();

router.get("/", usersController.getAll);
router.post("/", usersController.createUsers);
router.get("/:id", usersController.getById);
router.put("/:id", usersController.updateUsers);
router.delete("/:id", usersController.deleteUsers);

module.exports = router;