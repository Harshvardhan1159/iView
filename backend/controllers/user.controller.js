const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { validationResult } = require('express-validator');
const User = require('../models/user.model');
const { uploadOnCloudinary } = require("../utils/Cloudinary/cloudinary");
const { uploadFileOnFireBase } = require('../utils/Firebase/firebase');
require('dotenv').config();
const cookieParser = require('cookie-parser');

// Function to get User Details
const getUser = async(req,res)=>{

  try {
    const user = req.user.toObject();
    delete user.password;
    delete user._id;
    delete user.__v;
    res.json(user);
  } catch (error) {
    res.status(401).json({ message: 'Unauthorized' });
  }
}


// Function to register a new user
const registerUser = async (req, res) => {
  const profilePicture = req.files?.profilePicture?.[0]?.path;
  const resumePDF = req.files?.resumePDF?.[0]?.path;

  const { username, email, password, phoneNumber, languagePreference } = req.body;

  try {
    // Check if user with the same email exists
    let user = await User.findOne({
      $or: [
        { email: email },
        { phoneNumber: phoneNumber }
      ]
    });
    
    if (user) {
      return res.status(400).json({ message: 'User already exists with this email or Phone Number' });
    }

    // Upload profile picture to Cloudinary
    let profilePictureUrl = '';
    if (profilePicture) {
      const result = await uploadOnCloudinary(profilePicture);
      profilePictureUrl = result.secure_url;
    }

    // Upload resume to Firebase
    let resumeUrl = '';
    if (resumePDF) {
      const result = await uploadFileOnFireBase(resumePDF, `resumes/${Date.now()}_${req.files.resumePDF[0].originalname}`);
      resumeUrl = result; // Assuming result is a URL
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    user = new User({
      username,
      email,
      password: hashedPassword,
      profilePicture: profilePictureUrl,
      phoneNumber,
      resumePDF: resumeUrl,
      languagePreference
    });

    // Save the user to the database
    await user.save();

    // Return success response
    res.status(201).json({ 
        message: 'User registered successfully',
        user 
    });
  } catch (err) {
    console.error('Error in user registration:', err);
    res.status(500).json({ message: 'Server error' });
  }
};

// Function to login a user
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if email and password are provided
    if (!email || !password) {
      return res.status(400).json({ message: 'Please provide both email and password' });
    }

    // Check if user exists
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Ensure the password field is populated
    if (!user.password) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Compare passwords
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Create JWT token
    const payload = {
      user: {
        id: user.id,
      },
    };

    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: '1h' },
      (err, token) => {
        if (err) throw err;
        // Set the token in a cookie
        res.cookie('authToken', token, {
          // httpOnly: true, // Cookie is not accessible via JavaScript
          secure: process.env.NODE_ENV === 'production', // Set to true in production
          sameSite: 'Strict', // Mitigates CSRF attacks
        });
        res.json({ "message":"User Logged In Successfully" });
      }
    );
  } catch (err) {
    console.error('Error in user login:', err);
    res.status(500).json({ message: 'Server error' });
  }
};

// Function to edit user details
const editUser = async (req, res) => {
  const { username, email, phoneNumber, profilePicture, resumePDF, languagePreference } = req.body;

  try {
    // Fetch user from database
    let user = await User.findById(req.user.id);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Update user details
    user.username = username;
    user.email = email;
    user.phoneNumber = phoneNumber;

    if (profilePicture) {
      user.profilePicture = profilePicture;
    }

    if (resumePDF) {
      user.resumePDF = resumePDF;
    }

    user.languagePreference = languagePreference;

    // Save updated user
    await user.save();

    res.status(200).json({ message: 'User details updated successfully', user });
  } catch (error) {
    console.error('Error updating user:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = {
  getUser,
  registerUser,
  loginUser,
  editUser,
};
