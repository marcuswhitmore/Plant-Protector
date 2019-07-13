import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import landing from './componets/landing/';
import plantpage from './componets/plantpage';
import signup from './componets/signup'
import Navbar from "./componets/NavBar/navbar"
import login from './componets/login';

function App() {
  return (
    <Router>
      <div>
        
      
        <Route exact path="/" component={landing} />
        <Route path="/login" component={login} />
        <Route path="/signup" component={signup} />
        <Route path="/plantpage" component={plantpage} />
        {/* <Navbar sticky="bottom" /> */}
      </div>
    </Router>
  );
}


export default App;
