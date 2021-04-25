import { Component } from "react";
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Accordion from 'react-bootstrap/Accordion'
import '../../App.css';

let fname = "Annie";
let numWeeks = 5;
class Resources extends Component {
  render(){
    return <div>
      <h1>you're on the RESOURCES page!</h1>
      <div className="dashboard">

        <h5>Hello {fname}!</h5>
        <p>You are {numWeeks} weeks along your pregnancy.</p>
      </div>

      <Accordion defaultActiveKey="0">
        <Card>
            <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="0">
                Site Navigation
            </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
            <Card.Body>Your Dashboard is your new home! Here you will complete your daily check-ins and connect with your designated nurse.</Card.Body>
            </Accordion.Collapse>
        </Card>
        <Card>
            <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="1">
            Why do we use Daily Check-Ins?
            </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="1">
            <Card.Body>We use daily check-ins to make sure your pregnancy goes as smooth as possible! All this information is sent to your nurse so they know how to properly guide you along this journey.</Card.Body>
            </Accordion.Collapse>
        </Card>
    </Accordion>
    
    
    </div>
  }
}

export default Resources;