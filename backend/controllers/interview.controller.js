require("dotenv").config();
const nodemailer = require("nodemailer");
const Interview = require("../models/interview.model");
const HR = require("../models/hr.model");
const mongoose = require("mongoose");

// Create a transporter for sending emails
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.Email_User,
    pass: process.env.Email_Password,
  },
});

// Create Interview
const createInterview = async (req, res) => {
  try {
    const { intervieweeEmail, status, position, reportPDF, date, time, panelistEmails = [] } =
      req.body;

    // Ensure all required fields are provided
    if (!intervieweeEmail || !status || !date || !time) {
      return res
        .status(400)
        .json({ message: "Please provide all required fields" });
    }

    // Validate panelist count
    if (panelistEmails.length > 3) {
      return res.status(400).json({ message: "Maximum 3 panelists allowed" });
    }

    // Look up HR documents for provided panelist emails
    const panelistDocs = panelistEmails.length > 0
      ? await HR.find({ 'hrManager.email': { $in: panelistEmails } })
      : [];
    const panelistIds = panelistDocs.map(hr => hr._id);

    const newInterview = new Interview({
      intervieweeEmail,
      interviewier: req.hr._id, // HR ID from authenticated user
      status,
      reportPDF,
      date,
      time,
      position,
      panelists: panelistIds,
    });

    await newInterview.save();

    const InterviewHRCompany = req.hr.companyName;
    console.log(InterviewHRCompany);

    // Send emails (non-blocking for the response)
    const frontendUrl = process.env.FRONTEND_URL || "http://localhost:5173";

    // 1. Send email to the interviewee
    const mailOptions = {
      from: process.env.Email_User,
      to: intervieweeEmail,
      subject: "Your Scheduled Interview on IView",
      text:
        `Dear ${intervieweeEmail},\n\n` +
        `We are pleased to inform you that your interview has been successfully scheduled. Please find the details below:\n\n` +
        `Company: ${InterviewHRCompany}\n` +
        `Date: ${date}\n` +
        `Time: ${time}\n` +
        `Platform: IView\n\n` +
        `To ensure a smooth interview process, we recommend joining 5–10 minutes before the scheduled time. Please make sure to have a stable internet connection. If you are not currently registered on IView, kindly register before the interview to be able to join the meeting.\n\n` +
        `Should you have any questions or require assistance, do not hesitate to reply to this email.\n\n` +
        `We wish you the best of luck with your interview!\n\n` +
        `Best regards,\n` +
        `Team IView`,
    };

    transporter.sendMail(mailOptions)
      .then(() => console.log(`Email sent successfully to ${intervieweeEmail}`))
      .catch((emailErr) => console.error("Warning: Interview created but candidate email failed to send:", emailErr));

    // 2. Send panelist invitation emails
    for (const hr of panelistDocs) {
      const panelistJoinLink = `${frontendUrl}/hr/interview/room/?interviewID=${newInterview._id}`;
      const panelistMailOptions = {
        from: process.env.Email_User,
        to: hr.hrManager.email,
        subject: "You've been added as a Panelist on IView",
        text:
          `Dear ${hr.hrManager.name},\n\n` +
          `You have been invited as a panelist for an upcoming interview.\n\n` +
          `Candidate: ${intervieweeEmail}\n` +
          `Position: ${position}\n` +
          `Company: ${InterviewHRCompany}\n` +
          `Date: ${date}\n` +
          `Time: ${time}\n\n` +
          `Your join link (use this on the day of the interview):\n${panelistJoinLink}\n\n` +
          `Best regards,\n` +
          `Team IView`,
      };
      transporter.sendMail(panelistMailOptions)
        .then(() => console.log(`Panelist invitation sent to ${hr.hrManager.email}`))
        .catch((panelErr) => console.error(`Warning: Interview created but panelist email to ${hr.hrManager.email} failed:`, panelErr));
    }

    res.status(201).json(newInterview);
  } catch (err) {
    console.error("Error creating interview:", err);
    res.status(500).json({ message: "Server error" });
  }
};

// Edit Interview
const editInterview = async (req, res) => {
  try {
    const { id } = req.params;
    const { intervieweeEmail, status, position, reportPDF, date, time } =
      req.body;

    const interview = await Interview.findById(id);

    if (!interview) {
      return res.status(404).json({ message: "Interview not found" });
    }

    if (!interview.interviewier.equals(req.hr._id)) {
      return res.status(403).json({ message: "Unauthorized" });
    }

    interview.intervieweeEmail = intervieweeEmail || interview.intervieweeEmail;
    interview.status = status || interview.status;
    interview.reportPDF = reportPDF || interview.reportPDF;
    interview.date = date || interview.date;
    interview.time = time || interview.time;
    interview.position = position || interview.position;

    await interview.save();
    res.status(200).json(interview);
  } catch (err) {
    console.error("Error editing interview:", err);
    res.status(500).json({ message: "Server error" });
  }
};

// Delete Interview
const deleteInterview = async (req, res) => {
  try {
    const { id } = req.params;

    const interview = await Interview.findById(id);

    if (!interview) {
      return res.status(404).json({ message: "Interview not found" });
    }

    if (!interview.interviewier.equals(req.hr._id)) {
      return res.status(403).json({ message: "Unauthorized" });
    }

    await interview.remove();
    res.status(200).json({ message: "Interview deleted successfully" });
  } catch (err) {
    console.error("Error deleting interview:", err);
    res.status(500).json({ message: "Server error" });
  }
};

// Get Interviews by Interviewee Email
const getInterviewsByEmail = async (req, res) => {
  try {
    const { email } = req.user;
    const interviews = await Interview.find({
      intervieweeEmail: email,
    }).populate(
      "interviewier",
      "hrManager.email companyName profilePicture hrManager.name"
    );

    if (!interviews.length) {
      return res
        .status(404)
        .json({ message: "No interviews found for this email" });
    }

    res.status(200).json(interviews);
  } catch (err) {
    console.error("Error getting interviews by email:", err);
    res.status(500).json({ message: "Server error" });
  }
};

// Get Interviews by HR ID (includes interviews where this HR is a panelist)
const getInterviewsByHRId = async (req, res) => {
  try {
    const interviews = await Interview.find({
      $or: [
        { interviewier: req.hr._id },
        { panelists: req.hr._id }
      ]
    });

    if (!interviews.length) {
      return res
        .status(404)
        .json({ message: "No interviews found for this HR" });
    }

    res.status(200).json(interviews);
  } catch (err) {
    console.error("Error getting interviews by HR ID:", err);
    res.status(500).json({ message: "Server error" });
  }
};

// Get Interview by Interview ID
const getInterviewByInterviewID = async (req, res) => {
  try {
    const { interviewID } = req.body; // Extract interviewID from the request body

    // Use findOne to fetch the interview by ID
    const interview = await Interview.findOne({ _id: interviewID });

    if (!interview) {
      return res.status(404).json({ message: "Interview not found" });
    }

    // console.log("Interview fetched by ID:", interview);
    res.status(200).json(interview);
  } catch (error) {
    console.error("Error getting interview by ID:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// Get Interview by ID for Report (with populated HR data)
const getInterviewByIdForReport = async (req, res) => {
  try {
    const { id } = req.params;

    const interview = await Interview.findById(id).populate('interviewier', 'companyName');

    if (!interview) {
      return res.status(404).json({ message: "Interview not found" });
    }

    res.status(200).json(interview);
  } catch (error) {
    console.error("Error getting interview for report:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// Start Interview
const startInterview = async (req, res) => {
  try {
    const { interviewId, meetingId } = req.body;

    // Ensure meeting ID is provided
    if (!meetingId) {
      return res
        .status(400)
        .json({ message: "Please provide a valid meeting ID" });
    }

    // Find the interview by ID
    const interview = await Interview.findById(interviewId);

    // Check if the interview exists
    if (!interview) {
      return res.status(404).json({ message: "Interview not found" });
    }

    // Ensure the HR is authorized — must be the creator OR a registered panelist
    const isPanelist = interview.panelists.some(pid => pid.equals(req.hr._id));
    if (!interview.interviewier.equals(req.hr._id) && !isPanelist) {
      return res.status(403).json({ message: "Unauthorized" });
    }

    // Update the interview with the meeting ID
    interview.meetingId = meetingId;
    interview.status = "Ongoing";

    // Save the updated interview
    await interview.save();

    // Send emails (non-blocking for the response)
    const frontendUrl = process.env.FRONTEND_URL || "http://localhost:5173";

    // 1. Send email to the candidate
    const candidateJoinLink = `${frontendUrl}/user/interview/room/?interviewID=${interviewId}`;
    const candidateMailOptions = {
      from: process.env.Email_User,
      to: interview.intervieweeEmail,
      subject: "Your Interview Has Started on IView",
      text:
        `Dear ${interview.intervieweeEmail},\n\n` +
        `Your interview has now started. Please join the interview using the link below:\n\n` +
        `Join Link: ${candidateJoinLink}\n\n` +
        `For a smooth interview experience, we recommend joining promptly and ensuring a stable internet connection. If you encounter any issues, feel free to reply to this email.\n\n` +
        `We wish you the best of luck!\n\n` +
        `Best regards,\n` +
        `Team IView`,
    };
    transporter.sendMail(candidateMailOptions)
      .then(() => console.log(`Email sent to candidate: ${interview.intervieweeEmail}`))
      .catch((err) => console.error("Warning: Interview started but candidate email failed to send:", err));

    // 2. Send join email to all panelists
    if (interview.panelists && interview.panelists.length > 0) {
      HR.find({ _id: { $in: interview.panelists } })
        .then((panelistDocs) => {
          const panelistJoinLink = `${frontendUrl}/hr/interview/room/?interviewID=${interviewId}`;
          for (const hr of panelistDocs) {
            const panelistMailOptions = {
              from: process.env.Email_User,
              to: hr.hrManager.email,
              subject: "Interview Has Started — Join Now on IView",
              text:
                `Dear ${hr.hrManager.name},\n\n` +
                `The interview for ${interview.intervieweeEmail} has started. Please join now using the link below:\n\n` +
                `Join Link: ${panelistJoinLink}\n\n` +
                `Best regards,\n` +
                `Team IView`,
            };
            transporter.sendMail(panelistMailOptions)
              .then(() => console.log(`Panelist join email sent to ${hr.hrManager.email}`))
              .catch((err) => console.error(`Warning: Interview started but panelist email to ${hr.hrManager.email} failed:`, err));
          }
        })
        .catch((err) => console.error("Warning: Failed to fetch panelists for background emails:", err));
    }

    res
      .status(200)
      .json({ message: "Interview started successfully", interview });
  } catch (err) {
    console.error("Error starting interview:", err);
    res.status(500).json({ message: "Server error" });
  }
};


module.exports = {
  createInterview,
  editInterview,
  deleteInterview,
  getInterviewsByEmail,
  getInterviewsByHRId,
  getInterviewByInterviewID,
  startInterview,
  getInterviewByIdForReport
};
