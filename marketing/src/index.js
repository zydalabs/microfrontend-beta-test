import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

window.renderMarketing = (containerId, history) => {
  ReactDOM.render(
    <App history={history} />,
    document.getElementById(containerId)
  );
};

window.unmountMarketing = (containerId) => {
  ReactDOM.unmountComponentAtNode(document.getElementById(containerId));
};

if (!document.getElementById("Marketing-container")) {
  ReactDOM.render(<App />, document.getElementById("root"));
}
