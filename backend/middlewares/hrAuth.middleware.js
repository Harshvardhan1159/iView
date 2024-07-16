const jwt = require('jsonwebtoken');
const HR = require('../models/hr.model');

const auth = async (req, res, next) => {
  const token = req.header('Authorization').replace('Bearer ', '');
  
  try {
    if (!token) {
      return res.status(401).json({ message: 'No token, authorization denied' });
    }
    
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.hr = await HR.findById(decoded.hr.id);
    
    if (!req.hr) {
      return res.status(401).json({ message: 'HR not found' });
    }

    next();
  } catch (error) {
    console.error('Error in auth middleware:', error);
    res.status(401).json({ message: 'Token is not valid' });
  }
};

module.exports = auth;
