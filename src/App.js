import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import About from "./screens/About";
import Home from "./screens/Home";
import "./app.scss";

class App extends Component {
  state = {
    title: "Hello React Project 🤘"
  };

  render() {
    return (
      <Router>
        <div>
          <h1>{this.state.title}</h1>

          <ul className="navbar">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>

          <hr />

          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
        </div>
      </Router>
    );
  }
}

export default App;
