import React from 'react'
import "./App.css";

// import react-router-dom
import { Route, Switch } from "react-router-dom";

// imports pages
import Home from "../Pages/Home";
import Room from "../Pages/Room";
import SingleRoom from "../Pages/SingleRoom";
import Error from "../Pages/Error";

// import components
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import Signup from "../Components/Sign-Up/Sign-Up"
import Login from "../Components/Sign-In/Sign-In"
import About from '../Components/About/About';

import Payment from '../Pages/Payment';


function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/rooms/" component={Room} />
        <Route path="/signup" component={Signup} />
        <Route path="/Login" component={Login} exact />
        <Route path="/about" component={About} exact />
        <Route path="/payment" component={Payment} exact />
       
        
        
        <Route exact path="/rooms/:slug" component={SingleRoom} />
        <Route component={Error} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
