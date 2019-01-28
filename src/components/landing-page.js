import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class LandingPage extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <div className="main-landing-intro">
              <div className="wavez" />
              <div className="bk-title">
                <div>
                  <h2
                    className="highlight before"
                    style={{ textAlign: "left" }}
                  >
                    Frontend Web Development
                  </h2>
                  <h1>
                    <span className="highlight">PORT</span>FOLIO
                  </h1>
                  <h2>Dafne Olca</h2>
                </div>
              </div>
              <div className="banner-text">
                <div className="social-links">
                  <a
                    href="https://linkedin.com/in/dafneolca/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa fa-linkedin-square" aria-hidden="true" />
                  </a>

                  <a
                    href="https://github.com/dafneolca/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa fa-github-square" aria-hidden="true" />
                  </a>

                  <a
                    href="https://www.freecodecamp.org/dafneolca"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa fa-free-code-camp" aria-hidden="true" />
                  </a>

                  <a
                    href="https://codepen.io/dafneolca/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa fa-codepen" aria-hidden="true" />
                  </a>
                </div>
              </div>
              <div>
                <p
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    paddingTop: "10px"
                  }}
                >
                  HTML | CSS | Bootstrap | JavaScript | Angular2+ | React
                </p>
                <p className="landing-text">
                  “Oh the things you can find, if you don’t stay behind!”
                </p>
                <p
                  className="landing-text-quote"
                  style={{
                    fontSize: "15px",
                    opacity: "0.6"
                  }}
                >
                  Dr. Seuss
                </p>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default LandingPage;
