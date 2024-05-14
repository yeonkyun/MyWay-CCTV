import { BrowserRouter as Router } from "react-router-dom";
import React from "react";
import App from "./App";
import ReactDOM from "react-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <App />
  </Router>
);
