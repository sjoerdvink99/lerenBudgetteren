import React, { useState } from "react";
import { useStateValue } from "../StateProvider";
import { actionTypes } from "../reducer";
import { Link } from "react-router-dom";
import { TextField, Button } from "@material-ui/core";
import { auth } from "../firebase";
import "./Login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [dispatch] = useStateValue();

  const login = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((error) => alert(error.message));
    setEmail("");
    setPassword("");
  };

  return (
    <div className='login'>
      <div className='login__container'>
        <img src='#' alt='Leren budgetteren logo' />
        <h1>Login at Leren Budgetteren</h1>
        <TextField
          type='text'
          label='Email'
          variant='outlined'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          type='password'
          label='Password'
          variant='outlined'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button variant='contained' color='primary' onClick={login}>
          Login
        </Button>
        <p>
          No account yet? <Link to='/register'>Click here</Link>
        </p>
      </div>
    </div>
  );
}
