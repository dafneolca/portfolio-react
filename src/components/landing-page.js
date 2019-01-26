import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class LandingPage extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="https://upload.wikimedia.org/wikipedia/en/thumb/0/05/Hello_kitty_character_portrait.png/200px-Hello_kitty_character_portrait.png"
              alt="avatar"
              className="avatar-image"
            />

            <div className="banner-text">
              <h1>Frontend Web Developer</h1>
              <hr />
              <p>HTML | CSS | Bootstrap | JavaScript | Angular2+ | React</p>

              <div className="social-links">
                {/* LinkedIn */}
                <a
                  href="https://linkedin.com/in/dafneolca/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-linkedin-square" aria-hidden="true" />
                </a>

                {/* Github */}
                <a
                  href="https://github.com/dafneolca/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-github-square" aria-hidden="true" />
                </a>

                {/* FreeCodeCamp*/}
                <a
                  href="https://www.freecodecamp.org/dafneolca"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-free-code-camp" aria-hidden="true" />
                </a>

                {/* Codepen*/}
                <a
                  href="https://codepen.io/dafneolca/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-codepen" aria-hidden="true" />
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default LandingPage;
