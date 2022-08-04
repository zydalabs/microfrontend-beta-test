import React from "react";
import { createBrowserHistory } from "history";
import "./App.css";

const defaultHistory = createBrowserHistory();

function App({ history = defaultHistory }) {
  return (
    <div class="d-flex justify-content-center bg-light">
      <h1>Dashboard Header</h1>
    </div>
  );
}

export default App;
