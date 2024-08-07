const express = require("express");
const bodyParser = require("body-parser");
const authController = require("../Controllers/auth.controller");
const VerifySignup = require("../middleware/verifySignup");

const authRouter = express.Router();
authRouter.use(bodyParser.json());

// Register route
authRouter.post('/signup',[VerifySignup.checkExistUser, VerifySignup.checkValidPhone], authController.register);

// Login route
authRouter.post('/signin', authController.login);

// List route
module.exports = authRouter;