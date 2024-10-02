const express = require('express');
const router = express.Router();
const userController = require('../Controller/userController'); 

// Đăng ký
router.post('/register', userController.register);

// Đăng nhập
router.post('/login', userController.login);

// Đăng xuất
router.post('/logout', userController.logout);

module.exports = router;
