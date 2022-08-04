import React from "react";
import { createBrowserHistory } from "history";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import "./App.css";

const defaultHistory = createBrowserHistory();

function App({ history = defaultHistory }) {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} />
        {/* <Route path="/" component={MarketingHome} /> */}
      </Switch>
    </BrowserRouter>
  );
}

function Home() {
  return (
    <div class="d-flex justify-content-center bg-light">
      <h1>Dashboard Header</h1>
      <Link to={{ pathname: "/marketing" }}>
        <h1>Marketing</h1>
      </Link>
      <Link to={{ pathname: "/orders" }}>
        <h1>Orders</h1>
      </Link>
    </div>
  );
}

export default App;
