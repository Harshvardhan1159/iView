const express = require('express');
const { registerHR, loginHR, editHR } = require('../controllers/hr.controller');
const authMiddleware = require('../middlewares/hrauth.middleware'); // Middleware for HR authentication
const upload = require("../middlewares/multer.middleware");

const router = express.Router();

// POST /api/hr/signup
router.post('/signup', 
    upload.fields([
        {
            name: "profilePicture",
            maxCount: 1
        }
    ]),
    registerHR
);

// POST /api/hr/login
router.post('/login', loginHR);

// PUT /api/hr/edit
router.put('/edit', authMiddleware, editHR);

module.exports = router;
