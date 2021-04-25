import "./ChatRoom.css";
import { useState } from "react";
import { useCollectionData } from "react-firebase-hooks/firestore";
import ChatMessage from "./chat-message/ChatMessage";

import firebase from "../../firebase/firebase";

const firestore = firebase.firestore();
const auth = firebase.auth();

function ChatRoom() {
  const messagesRef = firestore.collection("messages");
  const query = messagesRef.orderBy("createdAt").limit(25);
  const [messages] = useCollectionData(query, { idField: "id" });

  const [formValue, setFormValue] = useState("");

  const sendMessage = async (e) => {
    const uid = auth.currentUser.uid;
    e.preventDefault();
    await messagesRef.add({
      text: formValue,
      createdAt: Date.now(),
      uid,
    });
    setFormValue("");
  };

  return (
    <div className="chat-container col-12">
      <div className="messages-container messages-scroll">
        {messages &&
          messages.map((msg) => <ChatMessage key={msg.id} message={msg}/>)}
      </div>
      <form className="chatbox-form col-12" onSubmit={sendMessage}>
        <input
          className="chatbox-input col-8"
          value={formValue}
          onChange={(e) => setFormValue(e.target.value)}
        />
        <button type="submit" className="submit-button col-6">Submit</button>
      </form>
    </div>
  );
}

export default ChatRoom;
