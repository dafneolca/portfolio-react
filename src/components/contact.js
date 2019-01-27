import React, { Component } from "react";

import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";

class Contact extends Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Dafne D. Olca</h2>
            <img
              src="https://upload.wikimedia.org/wikipedia/en/thumb/0/05/Hello_kitty_character_portrait.png/200px-Hello_kitty_character_portrait.png"
              alt="avatar"
              style={{ height: "250px" }}
            />
            <p style={{ width: "75%", margin: "auto", paddingTop: "1em" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec
              ipsum luctus, molestie dui sed, sollicitudin augue. Sed nec porta
              dolor. Maecenas ornare ipsum mi, sit amet maximus magna convallis
              vitae. Vestibulum viverra, metus fermentum dictum sodales, leo
              nisl dapibus libero, eget porta mi tortor gravida enim. Duis vel
              pretium nibh.
            </p>
          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr />
            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "25px", fontFamily: "Anton" }}
                  >
                    <i className="fa fa-whatsapp" aria-hidden="true" /> +34 617
                    56 39 55
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "25px", fontFamily: "Anton" }}
                  >
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
