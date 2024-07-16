const HR = require('../models/hr.model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Register HR
const registerHR = async (req, res) => {
  const { companyName, logo, name, email, phoneNumber, password } = req.body;

  try {
    // Check if HR already exists
    let hr = await HR.findOne({ 'hrManager.email': email });
    if (hr) {
      return res.status(400).json({ message: 'HR already exists' });
    }

    // Create new HR
    hr = new HR({
      companyName,
      logo,
      hrManager: {
        name,
        email,
        phoneNumber,
        password
      },
    });

    // Hash password
    const salt = await bcrypt.genSalt(10);
    hr.hrManager.password = await bcrypt.hash(password, salt);

    // Save HR
    await hr.save();

    // Generate JWT
    const payload = {
      hr: {
        id: hr.id
      }
    };

    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: 3600 },
      (err, token) => {
        if (err) throw err;
        res.json({ token, hr});
      }
    );
  } catch (err) {
    console.error('Error registering HR:', err);
    res.status(500).json({ message: 'Server error'
    });
  }
};

// Login HR
const loginHR = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if HR exists
    const hr = await HR.findOne({ 'hrManager.email': email });
    if (!hr) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Check password
    const isMatch = await bcrypt.compare(password, hr.hrManager.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Generate JWT
    const payload = {
      hr: {
        id: hr.id
      }
    };

    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: 3600 },
      (err, token) => {
        if (err) throw err;
        res.json({ token });
      }
    );
  } catch (err) {
    console.error('Error logging in HR:', err);
    res.status(500).json({ message: 'Server error' });
  }
};

// Edit HR Details
const editHR = async (req, res) => {
  const { companyName, logo, name, email, phoneNumber, password } = req.body;

  try {
    const hr = await HR.findById(req.hr.id);

    if (!hr) {
      return res.status(404).json({ message: 'HR not found' });
    }

    hr.companyName = companyName || hr.companyName;
    hr.logo = logo || hr.logo;
    hr.hrManager.name = name || hr.hrManager.name;
    hr.hrManager.email = email || hr.hrManager.email;
    hr.hrManager.phoneNumber = phoneNumber || hr.hrManager.phoneNumber;

    if (password) {
      const salt = await bcrypt.genSalt(10);
      hr.hrManager.password = await bcrypt.hash(password, salt);
    }

    await hr.save();
    res.json({ message: 'HR updated successfully', hr });
  } catch (err) {
    console.error('Error updating HR:', err);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { registerHR, loginHR, editHR };
