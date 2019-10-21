/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import './bootstrap.min.css';
import Header from "./Header";
import Footer from "./Footer";
import "./cover.css";

class Body extends Component {
  render() {
    return (
      <div className="cuerpo">
        <head>
          <title>Cover Template · Bootstrap</title>
          <link
            rel="canonical"
            href="https://getbootstrap.com/docs/4.3/examples/cover/"
          ></link>
          <link
            href="/docs/4.3/dist/css/bootstrap.min.css"
            rel="stylesheet"
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
            crossorigin="anonymous"
          ></link>
         
          <link href="cover.css" rel="stylesheet"></link>
        </head>

        <body className="text-center">
          <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
            <Header />

            <main role="main" className="inner cover">
              <h1 className="cover-heading">Cover your page.</h1>
              <p className="lead">
                Cover is a one-page template for building simple and beautiful
                home pages. Download, edit the text, and add your own fullscreen
                background photo to make it your own.
              </p>
              <p className="lead">
                <a href="#" class="btn btn-lg btn-secondary">Learn more</a>
              </p>
            </main>

            <Footer/>
          </div>
        </body>
      </div>
    );
  }
}

export default Body;
