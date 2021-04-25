import IconButton from "@material-ui/core/IconButton";
import Button from "react-bootstrap/Button";
import { MdAssignment } from "react-icons/md";
import { ImPhone, ImPhoneHangUp } from "react-icons/im";
import React, { useEffect, useRef, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Peer from "simple-peer";
import io from "socket.io-client";
import "./VideoChat.css";
import ChatRoom from "../../components/chat-room/ChatRoom";
import ChatInfo from "../../components/chat-info/ChatInfo";

const socket = io.connect("http://localhost:5000");

function VideoChat(props) {
  const [me, setMe] = useState("");
  const [stream, setStream] = useState();
  const [receivingCall, setReceivingCall] = useState(false);
  const [caller, setCaller] = useState("");
  const [callerSignal, setCallerSignal] = useState();
  const [callAccepted, setCallAccepted] = useState(false);
  const [idToCall, setIdToCall] = useState("");
  const [callEnded, setCallEnded] = useState(false);
  const [name, setName] = useState();

  const myVideo = useRef();
  const userVideo = useRef();
  const connectionRef = useRef();

  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then((stream) => {
        setStream(stream);
        myVideo.current.srcObject = stream;
      });

    socket.on("me", (id) => {
      setMe(id);
    });

    socket.on("callUser", (data) => {
      setReceivingCall(true);
      setCaller(data.from);
      setName(data.name);
      setCallerSignal(data.signal);
    });
  }, []);

  const callUser = (id) => {
    const peer = new Peer({
      initiator: true,
      trickle: false,
      stream: stream,
    });
    peer.on("signal", (data) => {
      socket.emit("callUser", {
        userToCall: id,
        signalData: data,
        from: me,
        name: name,
      });
    });
    peer.on("stream", (stream) => {
      userVideo.current.srcObject = stream;
    });
    socket.on("callAccepted", (signal) => {
      setCallAccepted(true);
      peer.signal(signal);
    });
    connectionRef.current = peer;
  };

  const answerCall = () => {
    setCallAccepted(true);
    const peer = new Peer({
      initiator: false,
      trickle: false,
      stream: stream,
    });
    peer.on("signal", (data) => {
      socket.emit("answerCall", { signal: data, to: caller });
    });
    peer.on("stream", (stream) => {
      userVideo.current.srcObject = stream;
    });

    peer.signal(callerSignal);
    connectionRef.current = peer;
  };

  const leaveCall = () => {
    setCallEnded(true);
    connectionRef.current.destroy();
  };

  return (
    <div className="main-container">
      <div className="col-3 mt-5">
        <ChatRoom />
      </div>
      <div className="col-6">
        <div className="video-container">
            {stream && (
              <div className="video mt-2">
              <video
                playsInline
                muted
                ref={myVideo}
                autoPlay
                style={{ width: "400px" }}
              />
              </div>
            )}
            {callAccepted && !callEnded ? (
              <div className="video mb-2">
              <video
                playsInline
                ref={userVideo}
                autoPlay
                style={{ width: "400px" }}
              />
              </div>
            ) : null}
        </div>
        <div className="container call">
          <CopyToClipboard text={me}>
            <Button variant="info">
              <MdAssignment style={{ color: "white" }} />
            </Button>
          </CopyToClipboard>

          <input
            value={idToCall}
            onChange={(e) => setIdToCall(e.target.value)}
          />
          <div className="call-button">
            {callAccepted && !callEnded ? (
                <IconButton
                aria-label="hang-up"
                  onClick={leaveCall}
                >
                  <ImPhoneHangUp style={{ color: "#17a2b8" }}/>
                </IconButton>
            ) : (
              <IconButton
                aria-label="call"
                onClick={() => callUser(idToCall)}
              >
                <ImPhone style={{ color: "#17a2b8" }}/>
              </IconButton>
            )}
          </div>
        </div>
        <div>
          {receivingCall && !callAccepted ? (
            <div className="caller">
              <h1>{name} is calling...</h1>
              <Button variant="info" onClick={answerCall}>
                Answer
              </Button>
            </div>
          ) : null}
        </div>
      </div>
      <div className="col-3 mt-5">
        <ChatInfo user={props.user}/>
      </div>
    </div>
  );
}

export default VideoChat;
