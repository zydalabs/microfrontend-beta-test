import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

window.renderOrders = (containerId, history) => {
  ReactDOM.render(
    <App history={history} />,
    document.getElementById(containerId)
  );
};

window.unmountOrders = (containerId) => {
  ReactDOM.unmountComponentAtNode(document.getElementById(containerId));
};

if (!document.getElementById("Orders-container")) {
  ReactDOM.render(<App />, document.getElementById("root"));
}
