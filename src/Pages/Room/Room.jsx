import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import React from "react";
import { useParams } from "react-router-dom";

const Room = () => {
  const { roomId } = useParams();
  const newMeeting = async (e) => {
    const appID = 541512934;
    const serverSecret = "bf92821021366f71fc638631d5b596e1";
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      roomId,
      Date.now().toString(),
      "Saidee Hasan"
    );

    const zc =ZegoUIKitPrebuilt.create(kitToken);
    zc.joinRoom({
        container:e,
        sharedLinks:[
            {
                name:'Copy Link',
                url:`http://localhost:3000/room/${roomId}`
            }
        ],
        scenario:{
            mode : ZegoUIKitPrebuilt.GroupCall,
            
        },
showScreenSharingButton:true,
    })
  };
  return (
    <div>

      <div ref={newMeeting} />
    </div>
  );
};

export default Room;
