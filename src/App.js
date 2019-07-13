import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import landing from './componets/landing/';
import login from './componets/login';
import signup from './componets/signup';
import plantpage from './componets/plantpage';
import Navbar from "./componets/NavBar/navbar";

function App() {
  return (
    <Router>
      <div>
        
      
        <Route exact path="/" component={landing} />
        <Route path="/login" component={login} />
        <Route path="/signup" component={signup} />
        <Route path="/plantpage" component={plantpage} />
        {/* <Navbar /> */}
      </div>
    </Router>
  );
}


export default App;
