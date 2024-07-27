const Interview = require('../models/interview.model');

// Create Interview
const createInterview = async (req, res) => {
  try {
    const { intervieweeEmail, status, position, reportPDF, date, time } = req.body;

    // Ensure all required fields are provided
    if (!intervieweeEmail || !status || !date || !time) {
      return res.status(400).json({ message: 'Please provide all required fields' });
    }

    const newInterview = new Interview({
      intervieweeEmail,
      interviewier: req.hr._id, // HR ID from authenticated user
      status,
      reportPDF,
      date,
      time,
      position
    });

    await newInterview.save();
    res.status(201).json(newInterview);
  } catch (err) {
    console.error('Error creating interview:', err);
    res.status(500).json({ message: 'Server error' });
  }
};

// Edit Interview
const editInterview = async (req, res) => {
  try {
    const { id } = req.params;
    const { intervieweeEmail, status,position, reportPDF, date, time } = req.body;

    const interview = await Interview.findById(id);

    if (!interview) {
      return res.status(404).json({ message: 'Interview not found' });
    }

    if (!interview.interviewier.equals(req.hr._id)) {
      return res.status(403).json({ message: 'Unauthorized' });
    }

    interview.intervieweeEmail = intervieweeEmail || interview.intervieweeEmail;
    interview.status = status || interview.status;
    interview.reportPDF = reportPDF || interview.reportPDF;
    interview.date = date || interview.date;
    interview.time = time || interview.time;
    interview.position = position || interview.position,

    await interview.save();
    res.status(200).json(interview);
  } catch (err) {
    console.error('Error editing interview:', err);
    res.status(500).json({ message: 'Server error' });
  }
};

// Delete Interview
const deleteInterview = async (req, res) => {
  try {
    const { id } = req.params;

    const interview = await Interview.findById(id);

    if (!interview) {
      return res.status(404).json({ message: 'Interview not found' });
    }

    if (!interview.interviewier.equals(req.hr._id)) {
      return res.status(403).json({ message: 'Unauthorized' });
    }

    await interview.remove();
    res.status(200).json({ message: 'Interview deleted successfully' });
  } catch (err) {
    console.error('Error deleting interview:', err);
    res.status(500).json({ message: 'Server error' });
  }
};

// Get Interviews by Interviewee Email
const getInterviewsByEmail = async (req, res) => {
  try {
    const { email } = req.user;
    const interviews = await Interview.find({ intervieweeEmail: email })
    .populate('interviewier', 'hrManager.email companyName profilePicture hrManager.name') 
    if (!interviews.length) {
      return res.status(404).json({ message: 'No interviews found for this email' });
    }

    res.status(200).json(interviews);
  } catch (err) {
    console.error('Error getting interviews by email:', err);
    res.status(500).json({ message: 'Server error' });
  }
};

// Get Interviews by HR ID
const getInterviewsByHRId = async (req, res) => {
  try {
    const interviews = await Interview.find({ interviewier: req.hr._id });

    if (!interviews.length) {
      return res.status(404).json({ message: 'No interviews found for this HR' });
    }

    res.status(200).json(interviews);
  } catch (err) {
    console.error('Error getting interviews by HR ID:', err);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = {
  createInterview,
  editInterview,
  deleteInterview,
  getInterviewsByEmail,
  getInterviewsByHRId
};
