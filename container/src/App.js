import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import MicroFrontend from "./MicroFrontend";

import "./App.css";

const {
  REACT_APP_ORDERS_HOST: ordersHost,
  REACT_APP_MARKETING_HOST: marketingHost,
  REACT_APP_HEADER_HOST: headerHost,
} = process.env;

function Orders({ history }) {
  return <MicroFrontend history={history} host={ordersHost} name="Orders" />;
}

function Marketing({ history }) {
  return (
    <MicroFrontend history={history} host={marketingHost} name="Marketing" />
  );
}

function Header({ history }) {
  return <MicroFrontend history={history} host={headerHost} name="Header" />;
}

function Home({ history }) {
  return (
    <div className="container">
      <Header />
      <Orders />
      <Marketing />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
