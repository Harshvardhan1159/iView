const express = require('express');
const { validationResult } = require('express-validator');
const { getUser,registerUser, loginUser, editUser } = require('../controllers/user.controller');
const authMiddleware = require('../middlewares/userAuth.middleware'); 
const upload = require("../middlewares/multer.middleware")

const router = express.Router();

router.route("/signup").post(
    upload.fields([
        {
            name: "profilePicture",
            maxCount: 1
        },{
            name: "resumePDF",
            maxCount: 1
        }
    ]),
    registerUser
)


// POST /api/users/login
router.post('/login', loginUser);

// PUT /api/users/edit
router.put('/edit', authMiddleware, upload.fields([
    {   name: 'profilePicture', 
        maxCount : 1
    }, 
    {    name: 'resumePDF' ,
        maxCount : 1

    }]),
 editUser);

router.get('/',authMiddleware,getUser);

module.exports = router;
