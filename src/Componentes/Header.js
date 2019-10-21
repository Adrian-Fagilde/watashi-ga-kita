/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import "./bootstrap.min.css";
import "./cover.css";

class Header extends Component {
  render() {
    return (
        <header className="masthead mb-auto">
          <div className="inner">
            <h3 className="masthead-brand">Cover</h3>
            <nav className="nav nav-masthead justify-content-center">
              <a className="nav-link active" href="#">Home</a>
              <a className="nav-link" href="#">Features</a>
              <a className="nav-link" href="#">Contact</a>
            </nav>
          </div>
        </header>
    );
  }
}

export default Header;
