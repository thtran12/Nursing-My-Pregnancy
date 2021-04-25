import { Component } from "react";
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import '../../App.css';

class Header extends Component {
  
  // logout() {
  //   firebase.auth().signOut();
  //   this.props.history.push("/");
  // }

  render() {
    return (
    <div>
  <Navbar collapseOnSelect expand="md" bg="info" variant="dark">
  <Navbar.Brand href="#home">Nursing My Pregnancy</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
    </Nav>
    <Nav>
      <Nav.Link href="">Dashboard</Nav.Link>
      <Nav.Link href="">Resources</Nav.Link>
      <Nav.Link href="">Sign In</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
  </div>   
      );
  }
}

export default Header;