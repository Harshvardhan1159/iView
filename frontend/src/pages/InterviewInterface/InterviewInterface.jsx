import React, { useState } from "react";
import CodeEditor from "../../components/CodeEditor/CodeEditor";
import VideoCallComponent from "../../components/VideoCall/video-sdk/VideoCallComponent";
import WhiteboardContainer from "../../components/Whiteboard/WhiteboardContainer";
import { PencilLine, Code } from "lucide-react";

const InterviewInterface = ({ room }) => {
  const [toggle, setToggle] = useState(true);

  const handleOpenWhiteBoard = () => {
    setToggle(false);
  };

  const handleOpenCodeEditor = () => {
    setToggle(true);
  };

  return (
    <div className="grid md:grid-cols-[3.0fr_1.5fr] grid-cols-1 md:grid-rows-[auto_1fr] grid-rows-[1fr_auto] max-w-screen max-h-screen h-screen w-screen md:overflow-hidden overflow-y-auto bg-[#121212] text-gray-200">
      {/* Code Editor Section */}
      <div className="bg-[#1e1e1e] flex justify-center items-center p-6 shadow-lg md:h-full h-screen overflow-y-auto row-span-1 md:row-auto md:order-none order-2">
        <div className="h-full w-full max-h-full max-w-full rounded-lg overflow-auto shadow-md">
          <div className="bg-[#272727f3] z-40 sticky top-0 px-6 pt-2 flex w-full justify-end">
            <label
              htmlFor="Toggle3"
              className="inline-flex items-center p-2 rounded-md cursor-pointer dark:text-gray-100"
            >
              <input id="Toggle3" type="checkbox" className="hidden peer" />
              <span
                onClick={handleOpenCodeEditor}
                className="px-4 py-2 rounded-l-md bg-[#212121] peer-checked:bg-[#2e2e2e]"
              >
                <Code />
              </span>
              <span
                onClick={handleOpenWhiteBoard}
                className="px-4 py-2 rounded-r-md bg-[#2e2e2e] peer-checked:bg-[#212121]"
              >
                <PencilLine />
              </span>
            </label>
          </div>
          <div className="min-h-screen">
            {toggle ? (
              <CodeEditor />
            ) : (
              <div className="h-screen w-full bg-[#2a2a2a] flex items-center justify-center">
                <WhiteboardContainer/>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* Video Call Section for Small Screens (first) */}
      <div className="bg-[#1e1e1e] flex justify-center items-center p-6 md:h-full h-screen  overflow-y-auto row-span-1  md:row-auto md:col-span-1 md:order-none order-1">
        <div className="h-full w-full max-h-full max-w-full rounded-lg overflow-auto shadow-md flex items-center justify-center p-4 bg-[#2a2a2a]">
          <VideoCallComponent />
        </div>
      </div>
    </div>
  );
};

export default InterviewInterface;
