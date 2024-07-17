import React from 'react';
import VideoCall from '../../components/common/VideoCall/VideoCall';
import Whiteboard from '../../components/common/Whiteboard/WhiteboardContainer';
import CodeEditor from '../../components/CodeEditor/CodeEditor';
import CodeApp from '../../components/CodeEditor/CodeApp';

const InterviewInterface = () => {
  return (
    <div className="grid grid-cols-[2.7fr_1.3fr] h-screen">
      <div className="bg-gray-700 flex items-center justify-center p-8">
        <div className="h-[500px]  w-full">
            {/* <CodeApp/> */}
            {/* <Whiteboard /> */}
        </div>
      </div>
      <div className="bg-gray-200 flex items-center justify-center p-8">
            {/* <VideoCall /> */}
      </div>
    </div>
  );
};

export default InterviewInterface;
