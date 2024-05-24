import React from "react";
import "./styles.css";
import Login from "../components/Sign-In";
import Signup from "./components/Sign-Up";
import Error from "./components/Error";
import { Route, Switch } from "react-router-dom";

function Login() {
  return (
    <div className="App">
      <Switch>
        <Route path="/Login" component={Login} exact />
        <Route path="/signup" component={Signup} />
        <Route component={Error} />
      </Switch>
    </div>
  );
}

export default Login;
