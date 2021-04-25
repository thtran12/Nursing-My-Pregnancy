import "./Register.css";
import { Component } from "react";
import { Col, Form, Button, Row } from "react-bootstrap";
import { withRouter } from "react-router-dom";

import firebase from "../../firebase/firebase";

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fname: "",
      lname: "",
      weeks: "",
      email: "",
      password: "",
    };

    if (this.props.user) {
      this.props.history.push("/");
    }
  }

  async onRegisterSubmitted(event) {
    event.preventDefault();

    try {
      const { email, password } = this.state;
      await firebase.auth().signInWithEmailAndPassword(email, password);
      this.props.history.push("/");
    } catch (err) {
      alert(err);
    }
  }

  render() {
    const { fname, lname, weeks, email, password } = this.state;

    return (
      <div className="Container Center">





        <Row className="Center"><h1>Register</h1></Row>
        <div className = "register">
        <Form onSubmit={(event) => this.onRegisterSubmitted(event)}>
              <Form.Row>
              <Form.Group as={Col} controlId="formGridFName">
            <Form.Label>First Name</Form.Label>
             <input
              value={fname}
              onChange={(e) => this.setState({ fname: e.target.value })}
              className="form-control"
              type="text"
              placeholder="First Name"
              required
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridLName">
            <Form.Label>Last Name</Form.Label>
            <input
              value={lname}
              onChange={(e) => this.setState({lname: e.target.value })}
              className="form-control"
              type="text"
              placeholder="First Name"
              required
            />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridWeeks">
            <Form.Label>Weeks Along</Form.Label>
            <input
              value={weeks}
              onChange={(e) => this.setState({lname: e.target.value })}
              className="form-control"
              type="number"
              placeholder="Number of Weeks"
              required
            />
            </Form.Group>
          </Form.Row>
            
          <Form.Row>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <input
                value={email}
                onChange={(e) => this.setState({ email: e.target.value })}
                className="form-control"
                type="email"
                placeholder="Email"
                required
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Password</Form.Label>
              <input
                      value={password}
                      onChange={(e) => this.setState({ password: e.target.value })}
                      className="form-control"
                      type="password"
                      placeholder="Password"
                      required
                    />
            </Form.Group>
          </Form.Row>


          <Form.Row>
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>City</Form.Label>
              <input
                      className="form-control"
                      type="text"
                      placeholder="City"
                      required
                    />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>State</Form.Label>
              <Form.Control as="select" defaultValue="Choose...">
                <option>Choose ...</option>
                <option>Alabama</option>
                <option>Alaska</option>
                <option>Arizona</option>
                <option>California</option>
                <option>Colorado</option>
              </Form.Control>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>Zip</Form.Label>
              <input
                      className="form-control"
                      type="number"
                      placeholder="Zip Code"
                      required
                    />
            </Form.Group>
          </Form.Row>

          <Button variant="info" block type="submit">
            Register
          </Button>
        </Form>
        </div>
      </div>
    );
  }
}

export default withRouter(Register);