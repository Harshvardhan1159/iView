import React, { useState } from "react";
import { useMeeting } from "@videosdk.live/react-sdk";
import { Mic, Video, Share2, MicOff, LogOut, VideoOff } from "lucide-react";

function Controls() {
  const [mic, setMic] = useState(true);
  const [video, setVideo] = useState(true);
  const { leave, toggleMic, toggleWebcam } = useMeeting();

  const handleToggleMic = ()=>{
    toggleMic();
    setMic(!mic);
  }

  const handleToggleVideo = ()=>{
    toggleWebcam();
    setVideo(!video);
  }

  return (
    <div>
      <div className=" p-4">
        <div className="flex justify-center space-x-4">
          {mic ? (
            <button onClick={handleToggleMic} className="p-3 bg-gray-700 rounded-full text-white hover:bg-gray-600 transition-colors">
              <Mic className="w-6 h-6" />
            </button>
          ) : (
            <button onClick={handleToggleMic} className="p-3 bg-red-500 rounded-full text-white hover:bg-red-600 transition-colors">
              <MicOff className="w-6 h-6" />
            </button>
          )}
          {video ? (
            <button className="p-3 bg-gray-700 rounded-full text-white hover:bg-gray-600 transition-colors">
              <Video onClick={handleToggleVideo} className="w-6 h-6" />
            </button>
          ) : (
            <button onClick={handleToggleVideo} className="p-3 bg-red-500 rounded-full text-white hover:bg-red-600 transition-colors">
              <VideoOff className="w-6 h-6" />
            </button>
          )}
          {/* <button className="p-3 bg-gray-700 rounded-full text-white hover:bg-gray-600 transition-colors">
            <Share2 className="w-6 h-6" />
          </button> */}
          <button
            onClick={() => leave()}
            className="p-3 bg-red-500 rounded-full text-white hover:bg-red-600 transition-colors"
          >
            <LogOut className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Controls;
