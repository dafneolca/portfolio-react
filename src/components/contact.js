import React, { Component } from "react";

import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";

class Contact extends Component {
  render() {
    return (
      <div className="contact-body">
        <div className="background">
          <div className="container">
            <div className="outer">
              <div className="outer-corner" />
              <h1 style={{ fontSize: "40px", textAlign: "center" }}>Contact</h1>
            </div>
            <div className="main">
              <div className="pd">
                <p className="st">Email: </p>
                <a href="mailto:olca.ddo@gmail.com">olca.ddo@gmail.com</a>
              </div>
              <div class="img" />
              <div class="main-outer" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
