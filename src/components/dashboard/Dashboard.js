import { Component } from "react";
import { Button, Form, Row } from "react-bootstrap";
import "../../App.css";
import firebase from "../../firebase/firebase";
import { Link } from "react-router-dom";

const firestore = firebase.firestore();

let todayDate = new Date();
let displayDate =
  (todayDate.getMonth() + 1)+
  " / " +
  todayDate.getDate() +
  " / " +
  todayDate.getFullYear();

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: this.props.user,
      nurse: null,
      steps: [],
    };
  }

  async componentDidMount() {
    const user = this.state.user;
    console.log(this.state.user);
    try {
      const snap1 = await firestore
        .collection("assignedNurse")
        .where("user", "==", user.uid)
        .get();
      console.log(snap1.docs);
      const id = snap1.docs[0].data().nurse;
      const snap2 = await firestore
        .collection("users")
        .where("id", "==", id)
        .get();
      this.setState({ nurse: snap2.docs[0].data() });
      const snap3 = await firestore
        .collection("weeks")
        .where("week", "==", "5")
        .get();
      this.setState({ steps: snap3.docs[0].data().steps });
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    const { user, nurse, steps } = this.state;
    return (
      <div className="Center">
        <Row>
          <div className="dashboard">
            <h3 className="greeting">Hello {user.name}!</h3>

            {user.role === "user" ? (
              <div className="dashboardText">
                <p>You are {user.numWeeks} weeks along your pregnancy.</p>
                <p>{displayDate}</p>
              </div>
            ) : (
              <div></div>
            )}

            <div className="dashboardBoxes">
              {user.role === "user" ? (
                <div className="dailyCheck dashboardBox">
                  <h5>Daily Check-In</h5>
                  <ul>
                    {steps.map((step) => (
                      <li key={step}>+ {step}</li>
                    ))}
                  </ul>
                </div>
              ) : (
                <div></div>
              )}

              {user.role === "user" ? (
                <div className="profile dashboardBox">
                  <h5>Meet {nurse && nurse.name}</h5>
                  <p>
                    {nurse && nurse.name} is a nurse located in{" "}
                    {nurse && nurse.location}.{" "}
                  </p>
                  <div className="notesReceived">
                    <h6>Notes from {nurse && nurse.name}</h6>
                    <p>You're doing great! Keep it up.</p>
                    <Form>
                      <Form.Group controlId="formGroupMsg">
                        <Form.Label>Leave a Note</Form.Label>
                        <Form.Control type="text" placeholder="Enter note" />
                      </Form.Group>
                      <Button variant="info" type="submit">
                        Submit
                      </Button>
                    </Form>
                  </div>
                </div>
              ) : (
                <div></div>
              )}

              {user.role === "user" ? (
                <div className="appts dashboardBox">
                  <h5>Upcoming Appointments</h5>
                  <Link to={"/chatroom/" + user.uid}>
                    <Button className="mt-2" variant="info" type="submit">
                      {displayDate}
                    </Button>
                  </Link>
                  <Form>
                    <Form.Group controlId="formGroupDate">
                      <Form.Label>Schedule Appointment</Form.Label>
                      <Form.Control
                        type="datetime-local"
                        value="2021-04-25T12:00:00"
                      />
                    </Form.Group>
                    <Button variant="info" type="submit">
                      Submit
                    </Button>
                  </Form>
                </div>
              ) : (
                <div className="appts dashboardBox">
                  <h5>Upcoming Appointments</h5>
                  <Link to={"/chatroom/" + "ZVQtkhFFrtf1GBLCMuUjW1ESCaD3"}>
                    <Button className="mt-2" variant="info" type="submit">
                      {displayDate}
                    </Button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </Row>
      </div>
    );
  }
}

export default Dashboard;
