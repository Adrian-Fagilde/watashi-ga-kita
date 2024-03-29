import React, { Component } from "react";
import './bootstrap.min.css';
import './cover.css';

class Footer extends Component {
  render() {
    return (
        <footer className="mastfoot mt-auto">
          <div className="inner">
            <p>
              Cover template for{" "}
              <a href="https://getbootstrap.com/">Bootstrap</a>, by{" "}
              <a href="https://twitter.com/mdo">@mdo</a>.
            </p>
          </div>
        </footer>

    );
  }
}

export default Footer;
