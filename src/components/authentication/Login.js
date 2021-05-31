import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { TextField, Button } from "@material-ui/core";
import { auth } from "../../firebase";
import logo from "../../assets/logo.png";
import "./Login.css";

export default function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .catch((error) => alert(error.message));
    setEmail("");
    setPassword("");
    history.push("/");
  };

  return (
    <div className='login'>
      <div className='login__container'>
        <Link to='/'>
          <img src={logo} alt='Leren budgetteren logo' />
        </Link>
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
