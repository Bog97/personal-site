import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router, Route, Link } from "react-router-dom";
import { Projects } from "./Projects";
import Homepage from "./Homepage";

class App extends Component {
  render() {
    return (<div>
      <Router>
        <>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/projects">Projects</Link>
          </nav>
          <Route path="/about" component={About} />
          <Route path="/projects" component={Projects} />
          <Route exact path="/" component={Homepage} />
        </>
      </Router>
    </div>
    );
  }
}

function About() {
  return <>
  <h1 className="mb-5"><em>ABOUT ME:</em></h1>
  <ul className="list">
    <li>I like web development and am enjoying this course, but it can be quite time consuming</li>
    <li>I am a senior in Electrical Engineering here at UW and am excited to graduate</li>
    <li>I <strong>really</strong> want to learn more server side development after this course</li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li>That is all</li>
  </ul>
  </>
}

export default App;
