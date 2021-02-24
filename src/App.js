import React from "react";
import "./styles.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./components/HomePage";
import LogInPage from "./components/LogInPage";
import IdeaPage from "./components/IdeaPage";

export default function App() {
  return (
    <Router>
      <div style={{ textAlign: "center" }}>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/login" component={LogInPage} />
          <Route path="/user/:userId" component={IdeaPage} />
        </Switch>
      </div>
    </Router>
  );
}
