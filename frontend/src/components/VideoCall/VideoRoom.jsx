import React from 'react'
import { useParams } from 'react-router-dom'
import {ZegoUIKitPrebuilt} from "@zegocloud/zego-uikit-prebuilt"
// import plugin
import { ZegoSuperBoardManager } from "zego-superboard-web";

const VideoRoom = () => {
    const {roomID} = useParams();
    const myMeeting =async(element)=>{
        const appID = 1797435637;
        const serverSecret = "a7e578d2dbdf287fcd95640429c84b42";
        const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomID,  Date.now().toString(),  "CleverIdiot");
        const zc = ZegoUIKitPrebuilt.create(kitToken);
        zc.joinRoom({

            container: element,
            scenario:{
                mode: ZegoUIKitPrebuilt.OneONoneCall,
            },
            // enableStereo: true,
            showScreenSharingButton: false,
            layout:"Grid",
            showRoomDetailsButton: false,
            showPinButton: false,
            showUserList: false,
        })
        // zc.addPlugins({ZegoSuperBoardManager});
    }

  return (
    <div className='h-[400px] overflow-y-scroll'>
      <div ref={myMeeting} className='h-[100px]' style={{width:"auto"}}/>
    </div>
  )
}

export default VideoRoom
