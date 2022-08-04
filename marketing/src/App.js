import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import "./App.css";
import MarketingHome from "./MarketingHome";

const defaultHistory = createBrowserHistory();

function App({ history = defaultHistory }) {
  return (
    <Router>
      <Switch>
        <Route exact path="/marketing" component={MarketingHome} />
      </Switch>
    </Router>
  );
}

export default App;
