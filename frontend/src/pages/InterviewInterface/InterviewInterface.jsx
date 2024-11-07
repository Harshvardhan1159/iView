import React from "react";
import CodeEditor from "../../components/CodeEditor/CodeEditor";
import VideoCall from "../../components/VideoCall/VideoCall";

const InterviewInterface = ({ room }) => {
  return (
    <div className="grid md:grid-cols-[3.0fr_2.0fr] grid-rows-[auto_1fr] max-w-screen max-h-screen h-screen w-screen md:overflow-hidden overflow-y-auto bg-[#121212] text-gray-200">
      {/* Code Editor Section */}
      <div className="bg-[#1e1e1e] flex justify-center items-center p-8 shadow-lg h-full overflow-y-auto row-span-1 md:row-auto">
        <div className="h-full w-full max-h-full max-w-full rounded-lg overflow-auto shadow-md">
          <CodeEditor />
        </div>
      </div>

      {/* Video Call Section */}
      <div className="bg-[#1e1e1e] flex justify-center items-center p-6 shadow-lg h-full overflow-y-auto row-span-1 md:row-auto">
        <div className="h-full w-full max-h-full max-w-full rounded-lg overflow-auto shadow-md flex items-center justify-center p-4 bg-[#2a2a2a]">
          <VideoCall />
        </div>
      </div>
    </div>
  );
};

export default InterviewInterface;
