const express = require('express');
const router = express.Router();
const mailController = require('../MailService/mailController'); 

// Quên mật khẩu
router.post('/forgot-password', mailController.forgotPassword);

// Đặt lại mật khẩu
router.post('/reset-password', mailController.resetPassword);

module.exports = router;
