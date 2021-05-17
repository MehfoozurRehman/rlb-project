import React from "react";
import "./App.scss";
import Home from "./screens/Home";
import Vacancies from "./screens/Vacancies";
import About from "./screens/About";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

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
          <Route path="/about-us">
            <About />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
