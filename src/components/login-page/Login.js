import "./Login.css";
import { Component } from "react";
import { Form, FormGroup, Button } from "react-bootstrap";
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
      <div className="container col-4 center">
        <Form onSubmit={(event) => this.onLoginSubmitted(event)}>
          <FormGroup>
            <Form.Label>Email Address</Form.Label>
            <input
              value={email}
              onChange={(e) => this.setState({ email: e.target.value })}
              className="form-control"
              type="email"
              required
            />
          </FormGroup>

          <FormGroup>
            <Form.Label>Password</Form.Label>
            <input
              value={password}
              onChange={(e) => this.setState({ password: e.target.value })}
              className="form-control"
              type="password"
              required
            />
          </FormGroup>

          <Button variant="outline-secondary" block type="submit">
            Login
          </Button>
        </Form>
      </div>
    );
  }
}

export default withRouter(Login);