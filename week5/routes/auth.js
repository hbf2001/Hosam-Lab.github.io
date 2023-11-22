const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth');

// Create login, logout and profile routes
router.post('/register', authController.register);
router.all('/login', authController.login);
router.get('/logout', authController.logout);

module.exports = router;
