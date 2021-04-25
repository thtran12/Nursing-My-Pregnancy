import { Component } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../../App.css";
import { withRouter } from "react-router-dom";

import firebase from "../../firebase/firebase";

class Header extends Component {
  logout() {
    firebase.auth().signOut();
    this.props.history.push("/");
  }

  render() {
    const user = this.props.user;
    return (
      <div>
        <Navbar collapseOnSelect expand="md" bg="info" variant="dark">
          <Navbar.Brand href="/">Nursing My Pregnancy</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto"></Nav>
            <Nav>
              {user ? <Nav.Link href="/">Dashboard</Nav.Link> : <div></div>}
              {user ? <Nav.Link href="/resources">Resources</Nav.Link> : <div></div>}
              {user ? (
                <Nav.Link onClick={() => this.logout()}>Sign Out</Nav.Link>
              ) : (
                <Nav.Link href="/login">Sign In</Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default withRouter(Header);
