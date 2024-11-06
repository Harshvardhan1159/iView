const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const HR = require('../models/hr.model');
const { uploadOnCloudinary } = require("../utils/Cloudinary/cloudinary");
require('dotenv').config();


// Fetch HR Details
const getHR = async(req,res)=>{
    try {
      const hr = req.hr.toObject();
      delete hr.hrManager.password;
      delete hr._id;
      delete hr.__v;
      res.json(hr);
    } catch (error) { 
      res.status(401).json({message: "Unauthorized"});
    }
}

// Function to register a new HR
const registerHR = async (req, res) => {
  const profilePicture = req.files?.profilePicture?.[0]?.path;
  const { companyName, name, email, phoneNumber, password } = req.body;

  try {
    // Check if HR with the same email exists
    let hr = await HR.findOne({ 'hrManager.email': email });
    if (hr) {
      return res.status(400).json({ message: 'HR already exists with this email' });
    }

    // Upload profile picture to Cloudinary
    let profilePictureUrl = '';
    if (profilePicture) {
      const result = await uploadOnCloudinary(profilePicture);
      profilePictureUrl = result.secure_url;
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new HR
    hr = new HR({
      companyName,
      profilePicture: profilePictureUrl,
      hrManager: {
        name,
        email,
        phoneNumber,
        password: hashedPassword
      }
    });

    // Save the HR to the database
    await hr.save();

    // Return success response
    res.status(201).json({ 
        message: 'HR registered successfully',
        hr 
    });
  } catch (err) {
    console.error('Error in HR registration:', err);
    res.status(500).json({ message: 'Server error' });
  }
};

// Function to login an HR
const loginHR = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if email and password are provided
    if (!email || !password) {
      return res.status(400).json({ message: 'Please provide both email and password' });
    }

    // Check if HR exists
    let hr = await HR.findOne({ 'hrManager.email': email });
    if (!hr) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Compare passwords
    const isMatch = await bcrypt.compare(password, hr.hrManager.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Create JWT token
    const payload = {
      hr: {
        id: hr.id,
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
          httpOnly: true,
          secure: process.env.NODE_ENV === 'production',
          sameSite: 'Strict',
        });
        res.json({ "message": "HR Logged In Successfully" });
      }
    );
  } catch (err) {
    console.error('Error in HR login:', err);
    res.status(500).json({ message: 'Server error' });
  }
};

// Function to edit HR details
const editHR = async (req, res) => {
  const { companyName, profilePicture, name, email, phoneNumber } = req.body;

  try {
    // Fetch HR from database
    let hr = await HR.findById(req.hr.id);

    if (!hr) {
      return res.status(404).json({ message: 'HR not found' });
    }

    // Update HR details
    hr.companyName = companyName || hr.companyName;
    hr.profilePicture = profilePicture || hr.profilePicture;
    hr.hrManager.name = name || hr.hrManager.name;
    hr.hrManager.email = email || hr.hrManager.email;
    hr.hrManager.phoneNumber = phoneNumber || hr.hrManager.phoneNumber;

    // Save updated HR
    await hr.save();

    res.status(200).json({ message: 'HR details updated successfully', hr });
  } catch (error) {
    console.error('Error updating HR:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = {
  getHR,
  registerHR,
  loginHR,
  editHR,
};
