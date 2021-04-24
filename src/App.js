import "./App.css";
import { Component } from "react";
import Header from "./components/header/Header";
import MainPage from "./components/main/mainPage";
import Login from "./components/login-page/Login";
import Register from "./components/register-page/Register";
import Dashboard from "./components/dashboard/Dashboard";
import VideoChat from "./components/video-chat/VideoChat";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: {name: "Marysia"},
    };
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
            {/* <Route exact path="/chatroom" render={() => <ChatRoom/>}></Route> */}
            <Route exact path="/video" render={() => <VideoChat user={user}/>}></Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;

