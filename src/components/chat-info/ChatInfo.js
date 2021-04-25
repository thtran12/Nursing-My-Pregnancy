import Card from "react-bootstrap/Card";
import { useCollectionData } from "react-firebase-hooks/firestore";
import firebase from "../../firebase/firebase";
import { useState, useEffect } from "react";

const firestore = firebase.firestore();
const auth = firebase.auth();

function ChatInfo(props) {
    const [lastVisit, setVisit] = useState([]);

    useEffect(() => {
        getVisits();
      }, []);

    const getVisits = async () => {
        try{
            const snap = await firestore.collection("visits").orderBy("date").limit(1).get();
            setVisit(snap.docs[0].data());
        }catch(err){
            console.log(err);
        }
    }

  return (
    <Card style={{ width: "13rem" }}>
      <Card.Body>
        <Card.Title>Last Visit Goals</Card.Title>
        <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
        <Card.Text style={{color: "black"}}>
          {lastVisit && lastVisit.notes}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default ChatInfo;
