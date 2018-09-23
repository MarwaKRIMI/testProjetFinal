import React, { Component } from "react";

import { BrowserRouter as Router, Link } from "react-router-dom";
import "./App.css";
import AlertPage from './AlertPage'
import Routes from "./Routes";
class App extends Component {
  render() {
    return (
      <Router>
                <div>
    
          <Routes />
        <AlertPage/>
        </div>
        
      </Router>
    );
  }
}

export default App;
