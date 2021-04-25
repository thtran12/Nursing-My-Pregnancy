import { Component } from "react";
import { Button, Form, Row} from "react-bootstrap";
import firebase from "../../firebase/firebase.js"
import '../../App.css';

//Code below is for dashboard!
let fname = "Annie";
let nurse = "Darlene";
let location = "San Francisco, California";
let numWeeks = 37;
let todayDate = new Date();
let displayDate = (todayDate.getMonth()+1)  + " / " + todayDate.getDate() + " / " + todayDate.getFullYear();
let weekDatabase;

function getWeek(){
    if (numWeeks < 4) weekDatabase = "week1-3";
    else if (numWeeks < 9) weekDatabase = "week4-8";
    else if (numWeeks < 14) weekDatabase = "week9-13";
    else if (numWeeks < 17) weekDatabase = "week14-16";
    else if (numWeeks < 21) weekDatabase = "Week17-20";
    else if (numWeeks < 25) weekDatabase = "Week21-24";
    else if (numWeeks < 28) weekDatabase = "week24-27";
    else if (numWeeks < 32) weekDatabase = "week28-32";
    else if (numWeeks < 37) weekDatabase = "week32-36";
    else weekDatabase = "week-delivery";
    return weekDatabase;
}

class Dashboard extends Component {

    constructor() {
        super();
        this.state = {
          checklist: ["test"],
        };
      }

    componentDidMount() {
        var db = firebase.firestore();
        var docRef = db.collection("weeks").doc(getWeek());

        docRef.get().then((doc) => {
            console.log("Cached document data:", doc.data());
            this.setState({checklist: doc.data().steps})
        }).catch((error) => {
            console.log("Error getting cached document:", error);
        });
    }

  render() {
    return <div>
      <Row>
        <div className="dashboard">
            <h3 className="greeting">Hello {fname}!</h3>
            <div className="dashboardText">
                <p>You are {numWeeks} weeks along your pregnancy.</p>
                <p>{displayDate}</p>   
            </div>
              

            <div className="dashboardBoxes">
                <div className = "dailyCheck dashboardBox">
                    <h5>Daily Check-In</h5>
                    <ul>
                        <li>Pregnancy Test</li>
                    </ul>
                </div>

                <div className = "profile dashboardBox">
                    <h5>Meet {nurse}</h5>
                    <p>{nurse} is a nurse located in {location}. </p>   
                    <div className = "notesReceived">
                        <h6>Notes from {nurse}</h6>
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
                    <div className = "appts dashboardBox">
                    <h5>Upcoming Appointments</h5>
                    <p>You have no appointments scheduled. Please schedule one below using our scheduler.</p>
                </div>
            </div>
        </div>
        </Row>


    



    </div>;
  }
}

export default Dashboard;
