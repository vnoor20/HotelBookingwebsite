import React from 'react';
import {auth,googleProvider} from "../../config/firebase";
import {createUserWithEmailAndPassword, signInWithPopup} from "firebase/auth";
import {useState} from "react";
import { Link } from 'react-router-dom';

function Register() {

  const [email,setEmail]=useState("");
  const [password,setPassword] =useState("");
  const signIn =async ()=> {
try{
  await createUserWithEmailAndPassword(auth,email,password)
  } catch(err){
    console.error(err);
  }

  };
  const signInwithGoogle =async ()=> {
    try{
      await signInWithPopup(auth,googleProvider)
      } catch(err){
        console.error(err);
      }
    
      };
  return (
    <>
    <div className="containerlogin">
    <div className="form-container" id="signup-form" >
      <h1 className='loginh'>Sign Up</h1>
      <form className='formlo' >
        {/* <label className='loginlabel' htmlFor="new-username">Username</label>
        <input className='loginin' type="text" id="new-username" name="new-username" required /> */}
        <label className='loginlabel' htmlFor="new-email">Email</label>
        <input type="email" className='loginin' id="new-email" name="new-email" onChange={(e)=> setEmail(e.target.value)} required />
        <label className='loginlabel' htmlFor="new-password">Password</label>
        <input type="password" id="new-password" className='loginin' name="new-password" onChange={(e)=> setPassword(e.target.value)} required />
        <button className='loginbt' type="submit" onClick={signIn}>Sign Up</button>
        <button onClick={signInwithGoogle} className='logina' id="login-link"> Sign In with Google?</button>
      </form>
      <p className='loginp'>Already have an account? <Link to='/Login' className='logina' id="login-link">Login</Link></p>
    </div>
    </div>
    </>
  );
}

export default Register;
