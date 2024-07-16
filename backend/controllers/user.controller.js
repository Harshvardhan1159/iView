const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { validationResult } = require('express-validator');
const User = require('../models/user.model');
require('dotenv').config("./env");
// Function to register a new user
const registerUser = async (req, res) => {
  const { username, 
    email, 
    password, 
    profilePicture,
    phoneNumber,
    resumePDF,
    languagePreference
} = req.body;

  try {
    // Check if user with the same email exists
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: 'User already exists with this email' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    user = new User({
      username,
      email,
      password: hashedPassword,
      profilePicture,
      phoneNumber,
      resumePDF,
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
  
      // Log retrieved user details for debugging
      console.log('User found:', user);
  
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
          res.json({ token });
        }
      );
    } catch (err) {
      console.error('Error in user login:', err);
      res.status(500).json({ message: 'Server error' });
    }
  };
  

// Function to edit user details
const editUser = async (req, res) => {
    // Extract user details from request body
    const { username, email, phoneNumber,profilePicture,resumePDF,languagePreference } = req.body;
  
    try {
      // Fetch user from database (you might need to adjust this logic)
      let user = await User.findById(req.user.id);
  
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      // Update user details
      user.username = username;
      user.email = email;
      user.phoneNumber = phoneNumber;
      user.profilePicture = profilePicture,
      user.resumePDF= resumePDF,
      user.languagePreference=languagePreference
  
      // Save updated user
      await user.save();
  
      res.status(200).json({ message: 'User details updated successfully', user });
    } catch (error) {
      console.error('Error updating user:', error);
      res.status(500).json({ message: 'Server error' });
    }
  };
  

module.exports = {
  registerUser,
  loginUser,
  editUser,
};
