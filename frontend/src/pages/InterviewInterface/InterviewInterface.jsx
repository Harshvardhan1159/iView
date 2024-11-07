import React from 'react';
import CodeEditor from '../../components/CodeEditor/CodeEditor';
import VideoCall from '../../components/VideoCall/VideoCall';


const InterviewInterface = ({ room }) => {
  return (
    <div className="grid grid-cols-[3.0fr_1.0fr] h-screen w-full">
      <div className="bg-background flex justify-center items-center p-8">
        <div className="h-full w-full ">
          <CodeEditor />
        </div>
      </div>
      <div className="bg-background flex justify-center items-center p-8">
        <VideoCall/>
      </div>
    </div>
  );
};

export default InterviewInterface;
