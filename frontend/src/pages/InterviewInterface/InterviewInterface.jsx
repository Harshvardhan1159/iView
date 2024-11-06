import React from 'react';
import Whiteboard from '../../components/Whiteboard/WhiteboardContainer';
import CodeEditor from '../../components/CodeEditor/CodeEditor';
import VideoRoom from '../../components/VideoCall/VideoRoom';
import VideoHome from '../../components/VideoCall/VideoHome';

const InterviewInterface = ({ room }) => {
  return (
    <div className="grid grid-cols-[3.0fr_1.0fr] h-screen w-full">
      <div className="bg-background flex justify-center items-center p-8">
        <div className="h-full w-full bg-gray-600">
          <CodeEditor />
        </div>
      </div>
      <div className="bg-background flex justify-center items-center p-8">
        {/* {room ? <VideoRoom /> : <VideoHome />} */}
      </div>
    </div>
  );
};

export default InterviewInterface;
