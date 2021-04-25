import { useState, useEffect } from "react";
import { Card, InputGroup, Button, FormControl } from "react-bootstrap";
import { useParams } from "react-router-dom";

import firebase from "../../firebase/firebase";

const firestore = firebase.firestore();
const auth = firebase.auth();

function ChatInfo(props) {
  const [lastVisit, setVisit] = useState([]);
  const [goal, setGoal] = useState("");

  useEffect(() => {
    getVisits();
  }, []);

  const uid = auth.currentUser && auth.currentUser.uid;
  console.log(uid);
  const roomUID = useParams().userId;
  console.log(roomUID);

  const getVisits = async () => {
    try {
      const snap = await firestore
        .collection("visits")
        // .where("user","==",userRoom.userId)
        .orderBy("date")
        .limit(1)
        .get();
      setVisit(snap.docs[0].data());
    } catch (err) {
      console.log(err);
    }
  };

  // const submit = async () => {
  //   try {
  //     const date = Date.now();
  //     const snap = await firestore
  //       .collection("visits")
  //       .doc()
  //       .set({
  //         date,
  //         user,
  //         nurse,
  //         notes: goal
  //       })
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  return (
    <>
      <Card style={{ width: "13rem" }} className="col-8 mx-auto mt-5">
        <Card.Body>
          <Card.Title>Last Visit Goals</Card.Title>
          <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
          <Card.Text style={{ color: "black" }}>
            {lastVisit && lastVisit.notes}
          </Card.Text>
        </Card.Body>
      </Card>

      {uid === roomUID ? (
        <div className="col-8 mx-auto">
          <label className="mt-5">
            What are your goals for the next visit?
          </label>
          <InputGroup>
            <FormControl
              as="textarea"
              value={goal}
              onChange={(e) => {
                setGoal(e.target.value);
              }}
              className="form-control"
              type="text"
            />
          </InputGroup>
          <Button className="mt-4" variant="info" block>
            Submit
          </Button>
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
}

export default ChatInfo;
