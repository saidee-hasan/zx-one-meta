import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import React from "react";
import { useParams } from "react-router-dom";

const Room = () => {
  const { roomId } = useParams();
  const newMeating = async (e) => {
    const appID = 541512934;
    const serverSecret = "bf92821021366f71fc638631d5b596e1";
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      roomId,
      Date.now(),
      "Saidee Hasan"
    );
  };
  return (
    <div>
      <h1>Room {roomId}</h1>
    </div>
  );
};

export default Room;
