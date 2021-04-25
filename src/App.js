import "./App.css";
import { Component } from "react";
import Header from "./components/header/Header";
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
      this.setState({ user: { ...user, role, name } });
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
            <Route exact path="/" render={() => user ? <Dashboard/> : <MainPage/>}></Route>
            <Route exact path="/login" render={() => <Login />}></Route>
            <Route exact path="/register" render={() => <Register />}></Route>
<<<<<<< HEAD
            <Route exact path="/chatroom" render={() => <VideoChat/>}></Route>
=======
            <Route exact path="/resources" render={() => <Resources />}></Route>
            {/* <Route exact path="/chatroom" render={() => <ChatRoom/>}></Route>
            <Route exact path="/video" render={() => <VideoChat/>}></Route> */}
>>>>>>> nat
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;

