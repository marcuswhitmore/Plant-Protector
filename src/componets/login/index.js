import React, { Component } from "react";
import "./style.css";
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";

class login extends Component {render() {
  return (
    <div>
        <h1> Hi - user- Welcome to your digital garden</h1>
      
        <Button component={ Link } to="/plantpage" variant="contained" color="primary">User Login</Button>
        <Button component={ Link } to="/signup" variant="contained" color="primary">Sign Up</Button>

        
      
    </div>
  );
}
}

export default login;