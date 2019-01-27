import React from "react";
import { Switch, Route } from "react-router-dom";

import LandingPage from "./landing-page";
import About from "./about-me";
import Contact from "./contact";
import Projects from "./projects";

const Main = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route path="/about" component={About} />
    <Route path="/projects" component={Projects} />
    <Route path="/contact" component={Contact} />
  </Switch>
);

export default Main;
