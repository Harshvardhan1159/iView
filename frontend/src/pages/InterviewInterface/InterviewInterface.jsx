import React from 'react';
import Whiteboard from '../../components/common/Whiteboard/WhiteboardContainer';
import CodeEditor from '../../components/CodeEditor/CodeEditor';
import VideoCall from '../../components/common/VideoCall/VideoCall';



const InterviewInterface = () => {
  return (
    <div className="grid pt-16 grid-cols-[2.7fr_1.3fr] h-screen w-full">
      <div className="bg-gray-700 flex justify-center items-center p-8">
        <div className="h-full w-full bg-gray-600">
          {/* <Whiteboard /> */}
          <CodeEditor/>
        </div>
      </div>
      <div className="bg-gray-200 flex justify-center items-center p-8">
        <VideoCall/>
      </div>
    </div>
  );
};

export default InterviewInterface;
