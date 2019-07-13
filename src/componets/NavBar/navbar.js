import React, { Component } from "react";
import { Link } from "react-router-dom";
import ResponsiveMenu from "react-responsive-navbar";
import "./NavStyle.css";


class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
        <div className="container">
          <Link className="navbar-brand" to="/landing">
            Plant Protector
          </Link>
          <ResponsiveMenu
            menuOpenButton={<div />}
            menuCloseButton={<div />}
            changeMenuOn="500px"
            largeMenuClassName="large-menu-classname"
            smallMenuClassName="small-menu-classname"
            menu={
              <ul>
                <li>
                  <Link to="/projects">Your Plants</Link>
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
