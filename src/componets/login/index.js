import React, { Component } from "react";
import "./style.css";
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";

class login extends Component {render() {
  return (
    <div>
        <h1> The user either logs in or signs up for a new account</h1>
      
        <Button component={ Link } to="/plantpage" variant="contained" color="primary" id="login">User Login</Button>
        <Button component={ Link } to="/signup" variant="contained" color="primary" id="login">Sign Up</Button>

        
      
    </div>
  );
}
}

export default login;