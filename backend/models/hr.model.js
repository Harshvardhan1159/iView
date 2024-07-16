const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Interview = require('./interview.model');

const hrSchema = new Schema({
  companyName: {
    type: String,
    required: true
  },
  logo: {
    type: String, 
    required: true
  },
  hrManager: {
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    phoneNumber: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    }
  },
  upcomingInterviews: [Interview.schema],  
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const HR = mongoose.model('HR', hrSchema);

module.exports = HR;
