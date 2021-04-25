import "./App.css";
import { Component } from "react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import MainPage from "./components/main/mainPage";
import Login from "./components/login-page/Login";
import Register from "./components/register-page/Register";
import Dashboard from "./components/dashboard/Dashboard";
import VideoChat from "./components/video-chat/VideoChat";
import Resources from "./components/resources/Resources";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import firebase from "./firebase/firebase";

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: null,
    };
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      this.setState({
        user,
      });
      if (user) {
        this.getUserInfo(user);
      }
    });
  }

  // retrieve additional information about the logged-in user from the users collection
  async getUserInfo(user) {
    try {
      const db = firebase.firestore();
      const snap = await db
        .collection("users")
        .where("id", "==", user.uid)
        .get();
      const role = snap.docs[0].data().role;
      const name = snap.docs[0].data().name;
      const numWeeks = snap.docs[0].data().numWeeks;
      this.setState({ user: { ...user, role, name, numWeeks }});
    } catch (err) {
      console.log(err);
    }
    console.log(this.state.user);
  }

  render() {
    const user = this.state.user;

    return (
      <Router>
        <div className="App">
          <Header user={user}/>
          <Switch>
            <Route exact path="/" render={() => user && user.role ? <Dashboard user={user}/> : <MainPage/>}></Route>
            <Route exact path="/login" render={() => <Login />}></Route>
            <Route exact path="/register" render={() => <Register />}></Route>
            <Route exact path="/chatroom/:userId" render={() => <VideoChat/>}></Route>
            <Route exact path="/resources" render={() => <Resources />}></Route>
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;

