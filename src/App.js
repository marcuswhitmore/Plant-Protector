import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import landing from './componets/landing/';
import projects from './componets/projects';
import Navbar from "./componets/NavBar/navbar"

function App() {
  return (
    <Router>
      <div>
        <Navbar />
      
        <Route exact path="/" component={landing} />
        <Route path="/projects" component={projects} />
        
      </div>
    </Router>
  );
}


export default App;
