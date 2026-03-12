import { useEffect, useState } from 'react';
import { format } from 'date-fns';
import { getInterviewsByHRId } from '../../api/Interview/interview.api';
import { useNavigate } from 'react-router-dom';
import { Calendar, User, ChevronRight, Users } from 'lucide-react';

export default function InterviewListHR({ refreshTrigger, currentHrId }) {
  const [activeTab, setActiveTab] = useState('Upcoming');
  const [interviewList, setInterviewList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchInterviews = async () => {
      try {
        const data = await getInterviewsByHRId();
        setInterviewList(data);
      } catch (error) {
        console.error('Error fetching interviews:', error.message);
        // If 404, it means no interviews found for this HR, which is a normal case
        setInterviewList([]);
      }
    };
    fetchInterviews();
  }, [refreshTrigger]);

  const handleStartInterview = (id) => {
    navigate(`/hr/interview/room/?interviewID=${id}`);
  };

  const handleDownloadReport = (id) => {
    // Placeholder for download report logic
    console.log(`Download report for interview ID: ${id}`);
  };

  const isToday = (dateStr) => {
    const today = new Date();
    const interviewDate = new Date(dateStr);
    return (
      interviewDate.getDate() === today.getDate() &&
      interviewDate.getMonth() === today.getMonth() &&
      interviewDate.getFullYear() === today.getFullYear()
    );
  };

  const handleViewReport = (id) => {
    navigate(`/report/${id}`);
  };

  const filteredInterviews = interviewList
    ? interviewList.filter((interview) => interview.status === activeTab)
    : [];

  return (
    <div className="p-4 sm:p-6 max-w-7xl mx-auto">
      {/* Status Tabs */}
      <div className="flex space-x-2 mb-6 border-b overflow-x-auto">
        {['Upcoming', 'Ongoing', 'Completed', 'Missed'].map((status) => (
          <button
            key={status}
            onClick={() => setActiveTab(status)}
            className={`px-4 py-2 font-medium rounded-t-sm transition-colors whitespace-nowrap ${activeTab === status
              ? 'bg-primary text-primary-foreground text-white'
              : 'hover:bg-muted text-white'
              }`}
          >
            {status}
          </button>
        ))}
      </div>

      {/* Interview Cards Container */}
      <div className="space-y-4 min-h-[400px]">
        {filteredInterviews.length > 0 ? (
          filteredInterviews.map((interview, index) => (
            <div
              key={index}
              className="bg-white rounded-sm p-4 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between shadow-lg transition-all"
            >
              <div className="flex items-start sm:items-center gap-4 sm:gap-6 w-full">
                <User className="w-8 h-8 text-gray-400 shrink-0" />
                <div className="flex-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-gray-500 text-sm truncate">{interview.intervieweeEmail}</span>
                    {/* Panelist badge — shown when this HR did not create the interview */}
                    {currentHrId && interview.interviewier !== currentHrId && (
                      <span className="text-xs bg-purple-100 text-purple-700 px-2 py-0.5 rounded-full font-medium whitespace-nowrap">
                        Panelist
                      </span>
                    )}
                    {/* Co-interviewers chip */}
                    {interview.panelists && interview.panelists.length > 0 && (
                      <span className="flex items-center gap-1 text-xs bg-blue-50 text-blue-600 px-2 py-0.5 rounded-full whitespace-nowrap">
                        <Users className="w-3 h-3" />
                        {interview.panelists.length} panelist{interview.panelists.length > 1 ? 's' : ''}
                      </span>
                    )}
                  </div>
                  <div className="font-semibold text-lg truncate">{interview.position}</div>
                  <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
                    <Calendar className="w-4 h-4 shrink-0" />
                    <span>
                      {format(new Date(interview.date), 'MMM dd, yyyy')} at{' '}
                      {interview.time}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 sm:gap-3 mt-4 sm:mt-0 w-full sm:w-auto">
                <button
                  onClick={() => handleViewReport(interview._id)}
                  className="text-[#2B579A] hover:text-[#1E3F7D] text-sm font-medium mr-2"
                >
                  View Report
                </button>
                {interview.status === 'Completed' ? (
                  <button
                    onClick={() => handleDownloadReport(interview._id)}
                    className="bg-[#2B579A] hover:bg-[#1E3F7D] text-white px-3 py-2 rounded-sm text-sm transition-colors"
                  >
                    Download Report
                  </button>
                ) : (
                  <button
                    disabled={!isToday(interview.date)}
                    onClick={() => handleStartInterview(interview._id)}
                    className="bg-[#2B579A] hover:bg-[#1E3F7D] text-white px-3 py-2 rounded-sm text-sm transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Start Interview
                  </button>
                )}
                <button className="flex items-center gap-1 text-[#2B579A] hover:text-[#1E3F7D] text-sm font-medium">
                  {interview.status}
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="bg-white rounded-sm p-6 flex items-center justify-center shadow-lg h-[400px]">
            <p className="text-center text-muted-foreground">
              No {activeTab.toLowerCase()} interviews found
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
