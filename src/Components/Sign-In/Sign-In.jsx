import React from 'react'
import { Link } from 'react-router-dom'
import { signInWithEmailAndPassword } from "firebase/auth";
import {auth} from "../../config/firebase";
import { useState } from 'react';



function Login() {
  
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    const signIn = (e) => {
      e.preventDefault();
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          console.log(userCredential);
        })
        .catch((error) => {
          console.log(error);
        });
    };
  
  return (
    <>
    <div className="containerlogin">
    <div className="form-container" id="login-form">
      <h1 className='loginh'>Login</h1>
      <form className='formlo' action='' >
        <label className='loginlabel' for="username">Username</label>
        <input className='loginin' type="text" id="username" name="username" onChange={(e) => setEmail(e.target.value)} required/>
        <label className='loginlabel' for="password">Password</label>
        <input className='loginin' type="password" id="password" name="password"  onChange={(e) => setPassword(e.target.value)} required/>
        <button className='loginbt' type="submit" onClick={signIn}>Login</button>
      </form>
      <p className='loginp'>Don't have an account? <Link className='logina' to='/signup' id="signup-link">Sign up</Link></p>
    </div>
    </div>
    </>
  )
}

export default Login
