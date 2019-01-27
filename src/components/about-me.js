import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Education from "./education";
import Experience from "./experience";
import Skills from "./skills";

class About extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{ textAlign: "center" }}>
              <img
                alt="avatar"
                src="https://upload.wikimedia.org/wikipedia/en/thumb/0/05/Hello_kitty_character_portrait.png/200px-Hello_kitty_character_portrait.png"
                style={{ height: "200px" }}
              />
            </div>

            <h2 style={{ paddingTop: "2em" }}>Dafne D. Olca</h2>
            <h4 style={{ color: "grey" }}>Frontend Web Developer</h4>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <p>
              Third Culture Kid and Global Citizen who doesnt believe in
              borders, gone to code.
            </p>
          </Cell>
          <Cell col={8} className="resume-right-col">
            <h2>Education</h2>
            <Education
              startYear={2017}
              endYear={2017}
              schoolName={"Ironhack"}
              schoolDescription={"Full-Stack Web Development"}
              courseDescription={
                "HTML/CSS, Bootstrap, Javascript, NodeJS, Express, MongoDB, Angular2+, TypeScript"
              }
            />
            <Education
              startYear={2012}
              endYear={2014}
              schoolName={"Webster University Vienna"}
              schoolDescription={"MBA"}
            />
            <Education
              startYear={2008}
              endYear={2011}
              schoolName={"Hawaii Pacific University"}
              schoolDescription={"BA"}
              courseDescription={"Multimedia with emphasis in Video Production"}
            />

            <hr style={{ borderTop: "3px solid #e22947" }} />
            <h2>Experience</h2>
            <Experience
              startYear={"10/2018"}
              endYear={"Current"}
              companyName={"Freelance"}
              jobDescription={"Front-End Web Developer"}
              jobDetails={
                "HTML/CSS, Bootstrap, Javascript, Angular2+, TypeScript, API Integration, Video Production, Video Editing, Writing DevOps Tutorials, Version Control"
              }
            />

            <Experience
              startYear={"02/2018"}
              endYear={"10/2018"}
              companyName={"Everis"}
              jobDescription={"Front-End Web Developer"}
              jobDetails={
                "HTML/CSS, Bootstrap, Javascript, Angular2+, TypeScript, API Integration, Version Control"
              }
            />

            <hr style={{ borderTop: "3px solid #e22947" }} />
            <h2>Skills</h2>
            <Skills skill={"HTML/CSS"} progress={90} />
            <Skills skill={"JavaScript"} progress={60} />
            <Skills skill={"Angular2+"} progress={70} />
            <Skills skill={"React"} progress={60} />
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default About;
