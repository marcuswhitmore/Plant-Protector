import React, { Component } from "react";
import { Link } from "react-router-dom";
import ResponsiveMenu from "react-responsive-navbar";
import "./NavStyle.css";
import Button from '@material-ui/core/Button';

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
        <div className="container">
        <Button component={ Link } to="/projects" variant="contained" color="primary">Plant Protector</Button>

          <Button component={ Link } to="/projects" variant="contained" color="primary">Hello World</Button>
          <ResponsiveMenu
            menuOpenButton={<div />}
            menuCloseButton={<div />}
            changeMenuOn="500px"
            largeMenuClassName="large-menu-classname"
            smallMenuClassName="small-menu-classname"
            menu={
              <ul>
                <li>
                  <Link to="/projects">Your</Link>
                </li>
                <li>
                  <Link to="/">Sign Out</Link>
                </li>
              </ul>
              
            }
          />
        </div>
      </nav>
    );
  }
}

export default Navbar;
