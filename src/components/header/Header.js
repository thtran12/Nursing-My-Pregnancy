import { Component } from "react";
import {
  withRouter,
  Link,
 } from 'react-router-dom';

import firebase from "../../firebase/firebase";

class Header extends Component {
  
  logout() {
    firebase.auth().signOut();
    this.props.history.push("/");
  }

  render() {
    const user = this.props.user;
    return (
      <>
        {user ? (
          <button className="sign-out" onClick={() => this.logout()}>
            Sign Out
          </button>
        ) : (
          <Link to="/login">
            <button className="sign-out">Sign In</button>
          </Link>
        )}
      </>
    );
  }
}

export default withRouter(Header);