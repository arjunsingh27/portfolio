import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/header.js";
import Home from "./home.jsx";
import About from "./about.jsx";
import Project from "./project.jsx";
import Contactus from "./contactus.jsx";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
        <Route path="/home">
        <Home />
        </Route>
        <Route path="/about">
        <About />
        </Route>
        <Route path="/projects">
        <Project />
        </Route>
        <Route path="/contactus">
        <Contactus />
        </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
