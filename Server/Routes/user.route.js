const express = require("express");
const bodyParser = require("body-parser");
const userController = require("../Controllers/user.controller");

const userRouter = express.Router();
userRouter.use(bodyParser.json());

// Create a new user
userRouter.post("/create", userController.create);
// Get all users
userRouter.get("/", userController.getAllUsers);
// Get user by id
// userRouter.get("/:id", userController.getUserById);
// Delete user by id
userRouter.delete("/delete/:id", userController.deleteUser);

module.exports = userRouter;