import { Component } from "react";
import { Accordion, Button, Card, Form, Row} from "react-bootstrap";
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

class Resources extends Component {
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

  render(){
    return <div>

<div className="Container">
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
                    {this.state.checklist.map(itemInChecklist => (<li>{itemInChecklist}</li>))}
            </ul>
                </div>

                <div className = "profile dashboardBox">
                    <h5>Meet {nurse}</h5>
                    <p>{nurse} is a nurse located in {location}. </p>   
                    <div className = "notesReceived">
                        <h6>Notes from {nurse}</h6>
                        <p>Aim for 30 minutes of exercise. Listen to your body; if you do not feel well, skip exercises.</p>
                        <p>You're doing great, {fname}! Excited to know the gender!</p>

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
                    <Form>
                            <Form.Group controlId="formGroupDate">
                                <Form.Label>Schedule Appointment</Form.Label>
                                <Form.Control type="datetime-local" value="2021-04-25T12:00:00" />
                            </Form.Group>
                            <Button variant="info" type="submit">
                                Submit
                            </Button>
                        </Form>
                </div>
            </div>
        </div>
        </Row>
      
        <Row className="Center">
            <h1>Resources</h1>
        </Row>
        <Row className="Center">

            <div className = "resources">
                <ul className ="faq">
                    <li>U.S. Department of Health and Human Services: <a href="https://www.womenshealth.gov/pregnancy">Women's Health Pregnancy</a>
                    </li>
                    <li>Pregnancy Diet: <a href="https://www.whattoexpect.com/pregnancy/eating-well/week-11/big-nutrition-small-packages.aspx">Best & Worst Foods</a>
                    </li>
                    <li>Kegal Exercises: <a href="https://www.whattoexpect.com/womens-health/kegels">How, When, and Why</a>
                    </li>
                    <li>General Pregnancy Workout: <a href="https://redtri.com/bump-baby/free-online-workouts-for-pregnant-women/">Free Workouts</a>
                    </li>
                    <li>Hospital Bag: <a href="https://www.babylist.com/hello-baby/what-to-pack-in-your-hospital-bag">What to Pack</a>
                    </li>
                </ul>
            </div>
        </Row>

        <Row className="Center">
            <h1>FAQ</h1>
        </Row>
    <Row className="Center">
      <Accordion className = "faq">
        <Card>
            <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="0">
                Who is Nursing My Pregnancy for?
            </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
            <Card.Body>If you are a First-Time Mother, this is the site for you! We want you to have virtual access to a nurse who may guide you along your pregnancy. You will have a Pregnancy Checklist that will help you smoothly ride along this pregnancy. </Card.Body>
            </Accordion.Collapse>
        </Card>
        <Card>
            <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="1">
                I'm a Nurse. How can I help?
            </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="1">
            <Card.Body>Thank you for volunteering!<br/>Create an account and you will be paired with a patient. You can follow along their journey and make appointments so that you may chat and video call. You will be able to read their progress and leave helpful notes.
            </Card.Body>
            </Accordion.Collapse>
        </Card>
        <Card>
            <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="2">
                Site Navigation
            </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="2">
            <Card.Body>Your Dashboard is your new home! Here you will complete your daily check-ins and connect with your designated nurse.<br/>With the Dashboard, you can complete your Daily Check-In, schedule appointments, view your patient/nurse's information.</Card.Body>
            </Accordion.Collapse>
        </Card>
        <Card>
            <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="3">
            Why do we use Daily Check-Ins?
            </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="3">
            <Card.Body>We use daily check-ins to make sure your pregnancy goes as smooth as possible! All this information is sent to your nurse so they know how to properly guide you along this journey.</Card.Body>
            </Accordion.Collapse>
        </Card>
        <Card>
            <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="4">
            How do Appointments work?
            </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="4">
            <Card.Body>If you are a patient, use the scheduler to create an appointment. On your dashboard, you will see a link under Upcoming Appointments. <br/> You can use the chat box to talk to one another and you can video call. Be sure to copy and paste the Video ID so that you may call one another.</Card.Body>
            </Accordion.Collapse>
        </Card>
    </Accordion>
    </Row>

    </div> 
    </div>
  }
}

export default Resources;