const express = require('express');
const { validationResult } = require('express-validator');
const { registerUser, loginUser, editUser } = require('../controllers/user.controller');
const authMiddleware = require('../middlewares/userauth.middleware'); 

const router = express.Router();

// POST /api/users/signup
router.post('/signup', registerUser);

// POST /api/users/login
router.post('/login', loginUser);

// PUT /api/users/edit
router.put('/edit', authMiddleware, editUser);

module.exports = router;
