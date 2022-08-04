import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import OrdersList from "./OrdersList";
import OrderDetails from "./OrderDetails";
import "./App.css";
import Orders from "./Orders";

const defaultHistory = createBrowserHistory();

function App({ history = defaultHistory }) {
  return (
    <Router>
      <Switch>
        {/* <Route exact path="/" component={Orders} /> */}
        <Route exact path="/orders" component={OrdersList} />
        <Route path="/orders/orderdetails/:orderid" component={OrderDetails} />
      </Switch>
    </Router>
  );
}

export default App;
