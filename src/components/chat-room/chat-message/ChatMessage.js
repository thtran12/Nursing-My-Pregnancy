import "./ChatMessage.css";

import firebase from "../../../firebase/firebase";

const auth = firebase.auth();

function ChatMessage(props) {
  const { text, uid } = props.message;

  const messageClass = uid === auth.currentUser.uid ? "sent" : "received";
  
  return (
      <div className={`message ${messageClass}`}>
        <p className="text">{text}</p>
      </div>
  );
}

export default ChatMessage;
