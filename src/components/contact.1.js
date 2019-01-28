import React, { Component } from "react";

import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";

class Contact extends Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={5}>
            <h1>Contact Me</h1>
            <hr />
            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent style={{ font: "800 25px 'open sans'" }}>
                    <i className="fa fa-whatsapp" aria-hidden="true" /> +34 617
                    56 39 55
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent style={{ font: "800 25px 'open sans'" }}>
                    <i className="fa fa-envelope" aria-hidden="true" />{" "}
                    olca.ddo@gmail.com
                  </ListItemContent>
                </ListItem>
              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Contact;
