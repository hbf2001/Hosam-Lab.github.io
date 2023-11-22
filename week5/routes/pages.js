const express = require('express');

// Creating a router instance from the express module
const router = express.Router();

const authController = require('../controllers/auth');

// Handling GET request for required paths:

router.get('/', authController.isLoggedIn, (req, res) => {
    res.render('index', { user: req.user });
});

router.get('/register', (req, res) => {
    res.render('register');
});

router.get('/login', (req, res) => {
    res.render('login');
});

router.get('/profile', authController.isLoggedIn, (req, res) => {
    res.render('profile', { user: req.user });
});

module.exports = router;