import React from "react";
import "./App.scss";
import Home from "./screens/Home";
import Vacancies from "./screens/Vacancies";
import About from "./screens/About";
import JobDetails from "./screens/JobDetails";
import Professional from "./screens/Professional";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Client from "./screens/Client";
import Blog from "./screens/Blog";
import BlogArtical from "./screens/BlogArtical";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/vacancies">
            <Vacancies />
          </Route>
          <Route path="/professional">
            <Professional />
          </Route>
          <Route path="/about-us">
            <About />
          </Route>
          <Route path="/clients">
            <Client />
          </Route>
          <Route path="/job-details">
            <JobDetails />
          </Route>
          <Route path="/blog">
            <Blog />
          </Route>
          <Route path="/blog-artical">
            <BlogArtical />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
