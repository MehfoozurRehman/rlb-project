import React from "react";
import "./App.scss";
import Home from "./screens/Home";
import Vacancies from "./screens/Vacancies";
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
        </Switch>
      </div>
    </Router>
  );
}
