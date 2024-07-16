const express = require('express');
const router = express.Router();
const { registerHR, loginHR, editHR } = require('../controllers/hr.controller');
const authMiddleware = require('../middlewares/hrAuth.middleware');

// POST /api/hr/signup
router.post('/signup', registerHR);

// POST /api/hr/login
router.post('/login', loginHR);

// PUT /api/hr/edit
router.put('/edit', authMiddleware, editHR);

module.exports = router;
