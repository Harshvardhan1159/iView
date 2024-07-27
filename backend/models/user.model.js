const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  profilePicture: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: String,
    required: true
  },
  resumePDF: {
    type: String  
  },
  languagePreference: {
    type: String,
    enum: ['English', 'Hindi'],
    default: 'English'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
