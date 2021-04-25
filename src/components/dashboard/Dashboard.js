import { Component } from "react";
import { Button, Form, Row} from "react-bootstrap";
import '../../App.css';

let fname = "Annie";
let nurse = "Darlene";
let location = "San Francisco, California";
let numWeeks = 5;
let todayDate = new Date();
let displayDate = todayDate.getDate() + " / " + todayDate.getMonth() + " / " + todayDate.getFullYear();

class Dashboard extends Component {
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
