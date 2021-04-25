import { Component } from "react";
import { Accordion, Button, Card, Row} from "react-bootstrap";
import '../../App.css';

class Resources extends Component {
  render(){
    return <div>

<div className="Container">
      
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