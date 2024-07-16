const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const interviewSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }, 
  hrId: {
    type: Schema.Types.ObjectId,
    ref: 'HR'
  },
  status: {
    type: String,
    enum: ['Completed', 'Missed', 'Upcoming'],
    required: true
  },
  reportPDF: {
    type: String  
  },
  dateOfCompletion: {
    type: Date
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Interview = mongoose.model('Interview', interviewSchema);

module.exports = Interview;
