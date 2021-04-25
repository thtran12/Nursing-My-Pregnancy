import "./ChatRoom.css";
import { useState } from "react";
import { useCollectionData } from "react-firebase-hooks/firestore";
import ChatMessage from "./chat-message/ChatMessage";
import { Form, Button } from "react-bootstrap";

import firebase from "../../firebase/firebase";

const firestore = firebase.firestore();
const auth = firebase.auth();

function ChatRoom() {
  const messagesRef = firestore.collection("messages");
  const query = messagesRef.orderBy("createdAt");
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
          messages.map((msg) => <ChatMessage key={msg.id} message={msg} />)}
      </div>
      <form onSubmit={sendMessage}>
      <Form.Row>
        <input
          className="chatbox-input col-8"
          value={formValue}
          onChange={(e) => setFormValue(e.target.value)}
        />
        <Button className="col-4" variant="info" block type="submit">
          Submit
        </Button>
      </Form.Row>
      </form>
    </div>
  );
}

export default ChatRoom;
