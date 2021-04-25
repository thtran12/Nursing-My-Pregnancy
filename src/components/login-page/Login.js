import "./Login.css";
import { Component } from "react";
import { Form, FormGroup, Button, Row } from "react-bootstrap";
import { withRouter } from "react-router-dom";

import firebase from "../../firebase/firebase";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };

    if (this.props.user) {
      this.props.history.push("/");
    }
  }

  async onLoginSubmitted(event) {
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
    const { email, password } = this.state;

    return (

<div className="Container Center">
        <Row className="Center"><h1>Sign In</h1></Row>
        <div className = "login">
        <Form onSubmit={(event) => this.onLoginSubmitted(event)}>
          <FormGroup>
            <Form.Label className="label">Email Address</Form.Label>
            <input
              value={email}
              onChange={(e) => this.setState({ email: e.target.value })}
              className="form-control transparent"
              type="email"
              required
            />
          </FormGroup>

          <FormGroup>
            <Form.Label className="label">Password</Form.Label>
            <input
              value={password}
              onChange={(e) => this.setState({ password: e.target.value })}
              className="form-control transparent"
              type="password"
              required
            />
          </FormGroup>

          <Button variant="info" block type="submit">
            Sign In
          </Button>
        </Form>
        </div>
</div>

    );
  }
}

export default withRouter(Login);