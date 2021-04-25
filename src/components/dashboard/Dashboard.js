import { Component } from "react";
import { Button, Form, Row } from "react-bootstrap";
import "../../App.css";
import firebase from "../../firebase/firebase";
import { Link } from "react-router-dom";

const firestore = firebase.firestore();

let todayDate = new Date();
let displayDate =
  todayDate.getDate() +
  " / " +
  todayDate.getMonth() +
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
      <div>
        <Row>
          <div className="dashboard">
            <h3 className="greeting">Hello {user.name}!</h3>
            <div className="dashboardText">
              <p>You are {user.numWeeks} weeks along your pregnancy.</p>
              <p>{displayDate}</p>
            </div>

            <div className="dashboardBoxes">
              <div className="dailyCheck dashboardBox">
                <h5>Daily Check-In</h5>
                <ul>
                  {steps.map((step) => (
                    <li key={step}>+ {step}</li>
                  ))}
                </ul>
              </div>

              <div className="profile dashboardBox">
                <h5>Meet {nurse && nurse.name}</h5>
                <p>
                  {nurse && nurse.name} is a nurse located in{" "}
                  {nurse && nurse.location}.{" "}
                </p>
                <div className="notesReceived">
                  <h6>Notes from {nurse && nurse.name}</h6>
                  <p>lorem ipsum</p>
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
              <div className="appts dashboardBox">
                <h5>Upcoming Appointments</h5>
                <Link to="/chatroom">
                  <Button className="mt-2" variant="info" type="submit">
                    {displayDate}
                  </Button>
                </Link>
                <Link to="/chatroom">
                  <Button className="mt-4" variant="outline-info" type="submit">
                    Schedule another appointment
                  </Button>
                </Link>
                {/* <p>
                  You have no appointments scheduled. Please schedule one below
                  using our scheduler.
                </p> */}
              </div>
            </div>
          </div>
        </Row>
      </div>
    );
  }
}

export default Dashboard;
