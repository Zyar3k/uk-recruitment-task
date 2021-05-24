import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";

import "./styles/global.scss";

import StoreProvider from "./store/StoreProvider";

ReactDOM.render(
  <Router>
    <StoreProvider>
      <App />
    </StoreProvider>
  </Router>,
  document.getElementById("root")
);
