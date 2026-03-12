import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import CustomBasicSkills from "./components/CustomBasicSkills";
import CustomProfileSection from "./components/CustomProfileSection";
import CustomQuestions from "./components/CustomQuestions";
import CustomFeedBack from "./components/CustomFeedBack";
import CustomFooter from "./components/CustomFooter";
import { fetchGeminiResponse } from "../../api/Gemini/gemini.api";
import { getInterviewByIdForReport } from "../../api/Interview/interview.api";
import GeminiLoader from "../GeminiLoader/GeminiLoader";
import extractJsonFromText from "../../utils/geminiTextParser";

const SampleReportWeb = ({ interviewIdProp }) => {
  const { interviewId: urlInterviewId } = useParams();
  // Use prop if available (from interview overlay), otherwise use URL param (from standalone page)
  const interviewId = interviewIdProp || urlInterviewId;

  const [loading, setLoading] = useState(true);
  const [skills, setSkills] = useState([]);
  const [questionList, setQuestionList] = useState([]);
  const [interviewData, setInterviewData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch interview data first
        const interview = await getInterviewByIdForReport(interviewId);
        setInterviewData(interview);

        // Extract position for Gemini (format: "Company - Position")
        const positionParts = interview.position.split(' - ');
        const position = positionParts[1] || positionParts[0];
        const company = interview.interviewier?.companyName || positionParts[0];

        // Fetch Gemini suggestions based on the position
        const data = await fetchGeminiResponse(position, company, "Fresher");
        const parsedData = extractJsonFromText(data);

        const questionsArray = parsedData[0] || [];
        const skillsArray = parsedData[1] || [];

        // Set the fetched data to state
        setSkills(skillsArray);
        setQuestionList(questionsArray);

        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    if (interviewId) {
      fetchData();
    } else {
      setLoading(false);
    }
  }, [interviewId]);

  // Prepare user data from interview
  const userData = interviewData ? {
    name: interviewData.intervieweeEmail.split('@')[0], // Use email username as name
    interviewDate: interviewData.date, // Pass raw date, child handles formatting
    role: interviewData.position.split(' - ')[1] || interviewData.position,
    company: interviewData.interviewier?.companyName || interviewData.position.split(' - ')[0],
    description: `Interview scheduled for ${interviewData.position}`,
  } : {
    name: interviewId ? "Loading..." : "No Interview Selected",
    interviewDate: "N/A",
    role: "N/A",
    company: "N/A",
    description: interviewId ? "Fetching interview details..." : "Please navigate to /report/:id with a valid interview ID.",
  };

  const sectionData = {
    strengths: [
      "Strong problem-solving abilities",
      "Excellent communication skills",
      "Deep knowledge of React ecosystem",
    ],
    weaknesses: [
      "Limited experience with backend technologies",
      "Need improvement in system design",
    ],
    improvements: [
      "Focus on learning Node.js and Express",
      "Practice more system design problems",
      "Contribute to open source projects",
    ],
  };

  const [feedbacks, setFeedbacks] = useState([
    { id: 1, text: "Great performance!", sentiment: "positive" },
    {
      id: 2,
      text: "Needs improvement in time management.",
      sentiment: "negative",
    },
  ]);

  const [isEditing, setIsEditing] = useState(true);

  const exportToPDF = () => {
    const doc = new jsPDF();
    let yPosition = 20;

    // Define colors
    const primaryColor = [41, 128, 185]; // Blue
    const secondaryColor = [52, 73, 94]; // Dark gray
    const accentColor = [46, 204, 113]; // Green for AI badge

    // 1. HEADER SECTION
    doc.setFillColor(...primaryColor);
    doc.rect(0, 0, 210, 40, 'F');

    doc.setTextColor(255, 255, 255);
    doc.setFontSize(24);
    doc.setFont('helvetica', 'bold');
    doc.text('Interview Assessment Report', 105, 20, { align: 'center' });

    doc.setFontSize(12);
    doc.setFont('helvetica', 'normal');
    doc.text(`Generated on: ${new Date().toLocaleDateString()}`, 105, 30, { align: 'center' });

    yPosition = 50;

    // 2. CANDIDATE PROFILE SECTION
    doc.setTextColor(...secondaryColor);
    doc.setFontSize(16);
    doc.setFont('helvetica', 'bold');
    doc.text('Candidate Information', 20, yPosition);

    yPosition += 5;

    const interviewDateStr = userData.interviewDate !== "N/A" && userData.interviewDate !== "Invalid Date"
      ? new Date(userData.interviewDate).toLocaleDateString()
      : "N/A";

    // Expanded candidate info table with email and time
    const candidateInfoBody = [
      ['Candidate Name', userData.name],
      ['Email', interviewData?.intervieweeEmail || 'N/A'],
      ['Position Applied', userData.role],
      ['Company', userData.company],
      ['Interview Date', interviewDateStr],
      ['Interview Time', interviewData?.time || 'N/A'],
      ['Interview Status', interviewData?.status || 'N/A']
    ];

    doc.autoTable({
      startY: yPosition,
      head: [['Field', 'Details']],
      body: candidateInfoBody,
      theme: 'striped',
      headStyles: { fillColor: primaryColor },
      margin: { left: 20, right: 20 }
    });

    yPosition = doc.lastAutoTable.finalY + 15;

    // 2.5 INTERVIEW DETAILS SECTION
    if (interviewData) {
      doc.setFontSize(12);
      doc.setFont('helvetica', 'bold');
      doc.setTextColor(...secondaryColor);
      doc.text('Additional Details:', 20, yPosition);

      yPosition += 8;

      doc.setFontSize(10);
      doc.setFont('helvetica', 'normal');
      doc.setTextColor(100, 100, 100);

      doc.text(`Interview ID: ${interviewData._id || interviewId}`, 25, yPosition);
      yPosition += 6;

      if (interviewData.meetingId) {
        doc.text(`Meeting ID: ${interviewData.meetingId}`, 25, yPosition);
        yPosition += 6;
      }

      yPosition += 10;
    }

    // 3. SKILLS ASSESSMENT SECTION
    if (skills.length > 0) {
      doc.setFontSize(16);
      doc.setFont('helvetica', 'bold');
      doc.setTextColor(...secondaryColor);
      doc.text('Skills Assessment', 20, yPosition);

      yPosition += 5;

      const skillsData = skills.map(skill => [
        skill.name,
        `${skill.rating}/10`,
        '★'.repeat(Math.floor(skill.rating / 2))
      ]);

      doc.autoTable({
        startY: yPosition,
        head: [['Skill', 'Rating', 'Level']],
        body: skillsData,
        theme: 'grid',
        headStyles: { fillColor: primaryColor },
        margin: { left: 20, right: 20 }
      });

      yPosition = doc.lastAutoTable.finalY + 15;
    }

    // 4. AI-GENERATED INTERVIEW QUESTIONS SECTION
    if (questionList.length > 0) {
      // Check if we need a new page
      if (yPosition > 250) {
        doc.addPage();
        yPosition = 20;
      }

      doc.setFontSize(16);
      doc.setFont('helvetica', 'bold');
      doc.setTextColor(...secondaryColor);
      doc.text('Interview Questions & Assessment', 20, yPosition);

      // AI-Generated badge
      doc.setFillColor(...accentColor);
      doc.rect(20, yPosition + 3, 60, 7, 'F');
      doc.setFontSize(9);
      doc.setTextColor(255, 255, 255);
      doc.setFont('helvetica', 'bold');
      doc.text('AI-Generated by Gemini', 22, yPosition + 8);

      yPosition += 15;

      // Add note about AI generation
      doc.setFontSize(10);
      doc.setTextColor(100, 100, 100);
      doc.setFont('helvetica', 'italic');
      const aiNote = `These questions were automatically generated using Google Gemini AI for ${userData.role} at ${userData.company}`;
      const splitNote = doc.splitTextToSize(aiNote, 170);
      doc.text(splitNote, 20, yPosition);
      yPosition += (splitNote.length * 5) + 8;

      doc.setTextColor(...secondaryColor);
      doc.setFont('helvetica', 'normal');

      const questionsData = questionList.map((q, idx) => [
        `Q${idx + 1}`,
        q.text || q.question || 'N/A',
        `${q.rating}/10`,
        q.remark || 'N/A'
      ]);

      doc.autoTable({
        startY: yPosition,
        head: [['#', 'Question', 'Rating', 'Remarks']],
        body: questionsData,
        theme: 'striped',
        headStyles: {
          fillColor: primaryColor,
          fontSize: 11,
          fontStyle: 'bold'
        },
        bodyStyles: {
          fontSize: 10
        },
        columnStyles: {
          0: { cellWidth: 15, halign: 'center' },
          1: { cellWidth: 95 },
          2: { cellWidth: 25, halign: 'center' },
          3: { cellWidth: 45 }
        },
        margin: { left: 20, right: 20 }
      });

      yPosition = doc.lastAutoTable.finalY + 10;

      // Add question summary
      doc.setFontSize(11);
      doc.setTextColor(...secondaryColor);
      doc.setFont('helvetica', 'bold');
      doc.text(`Total Questions Generated: ${questionList.length}`, 20, yPosition);
      yPosition += 7;

      const avgRating = (questionList.reduce((sum, q) => sum + (q.rating || 0), 0) / questionList.length).toFixed(1);
      doc.text(`Average Expected Rating: ${avgRating}/10`, 20, yPosition);
      yPosition += 15;
    }

    // 5. FEEDBACK SECTION
    if (yPosition > 230) {
      doc.addPage();
      yPosition = 20;
    }

    doc.setFontSize(16);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(...secondaryColor);
    doc.text('Performance Feedback', 20, yPosition);

    yPosition += 10;

    // Strengths
    doc.setFontSize(14);
    doc.setTextColor(...primaryColor);
    doc.text('Strengths:', 20, yPosition);
    yPosition += 5;

    doc.setFontSize(11);
    doc.setTextColor(...secondaryColor);
    doc.setFont('helvetica', 'normal');
    sectionData.strengths.forEach((strength, idx) => {
      doc.text(`${idx + 1}. ${strength}`, 25, yPosition);
      yPosition += 7;
    });

    yPosition += 5;

    // Weaknesses
    doc.setFontSize(14);
    doc.setTextColor(...primaryColor);
    doc.setFont('helvetica', 'bold');
    doc.text('Areas for Improvement:', 20, yPosition);
    yPosition += 5;

    doc.setFontSize(11);
    doc.setTextColor(...secondaryColor);
    doc.setFont('helvetica', 'normal');
    sectionData.weaknesses.forEach((weakness, idx) => {
      doc.text(`${idx + 1}. ${weakness}`, 25, yPosition);
      yPosition += 7;
    });

    yPosition += 5;

    // Improvements
    doc.setFontSize(14);
    doc.setTextColor(...primaryColor);
    doc.setFont('helvetica', 'bold');
    doc.text('Recommended Next Steps:', 20, yPosition);
    yPosition += 5;

    doc.setFontSize(11);
    doc.setTextColor(...secondaryColor);
    doc.setFont('helvetica', 'normal');
    sectionData.improvements.forEach((improvement, idx) => {
      doc.text(`${idx + 1}. ${improvement}`, 25, yPosition);
      yPosition += 7;
    });

    // 6. FOOTER SECTION - Add page numbers and AI disclaimer
    const pageCount = doc.internal.getNumberOfPages();
    for (let i = 1; i <= pageCount; i++) {
      doc.setPage(i);

      // Page number
      doc.setFontSize(10);
      doc.setTextColor(128, 128, 128);
      doc.text(
        `Page ${i} of ${pageCount}`,
        105,
        doc.internal.pageSize.height - 10,
        { align: 'center' }
      );

      // AI Disclaimer on first page
      if (i === 1) {
        doc.setFontSize(8);
        doc.setTextColor(150, 150, 150);
        const disclaimer = 'Questions and suggestions generated by Google Gemini AI • iView Interview Platform';
        doc.text(disclaimer, 105, doc.internal.pageSize.height - 5, { align: 'center' });
      }
    }

    // 7. SAVE THE PDF with detailed filename
    const safeName = userData.name.replace(/[^a-zA-Z0-9]/g, '_');
    const safeCompany = userData.company.replace(/[^a-zA-Z0-9]/g, '_');
    const dateStr = new Date().toISOString().split('T')[0];
    const fileName = `Interview_Report_${safeName}_${safeCompany}_${dateStr}.pdf`;
    doc.save(fileName);
  };

  const handleSaveSkills = (updatedSkills) => {
    setSkills(updatedSkills);
  };

  if (loading) return <GeminiLoader />;

  return (
    <div className="max-h-screen overflow-auto">
      <CustomProfileSection Editing={isEditing} userData={userData} />

      <CustomBasicSkills
        skillsList={skills}
        isEditing={isEditing}
        onSaveSkills={handleSaveSkills}
      />

      <CustomQuestions isEditing={isEditing} questionList={questionList} />
      <CustomFeedBack isEditing={isEditing} sectionData={sectionData} />
      <CustomFooter
        feedbacksProp={feedbacks}
        isEditing={isEditing}
        onFeedbackChange={setFeedbacks}
        onAddFeedback={setFeedbacks}
      />

      <div className="mt-6 fixed bottom-5 right-5 flex gap-3">
        <button
          onClick={() => setIsEditing(!isEditing)}
          className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors shadow-lg"
        >
          {isEditing ? "Disable Editing" : "Enable Editing"}
        </button>

        <button
          onClick={exportToPDF}
          className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors shadow-lg flex items-center gap-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
          Export to PDF
        </button>
      </div>
    </div>
  );
};

export default SampleReportWeb;
