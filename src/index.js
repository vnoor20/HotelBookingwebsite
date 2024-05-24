import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import App from "./App/App";
import "./index.css";

// import react-router-dom
import { BrowserRouter as Router } from "react-router-dom";

// import context
import { RoomProvider } from "./Context/Context";

ReactDOM.render(
  <RoomProvider>
    <Router>
      <App />
    </Router>
  </RoomProvider>,
  document.getElementById("root")
);


reportWebVitals();
