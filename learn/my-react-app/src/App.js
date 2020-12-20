import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Layouthtml from "./page/sider";
import PrivateRoute from "./page/PrivateRoute";
import LoginPage from "./page/LoginPage";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          {/* <Route path="/" component={Layouthtml}>
          </Route> */}
          <PrivateRoute path="/" component={Layouthtml} />
          <Route path="/login" component={LoginPage} />
        </Router>
      </div>
    );
  }
}

export default App;
