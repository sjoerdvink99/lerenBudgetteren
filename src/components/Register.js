import React, { useState } from "react";
import { useStateValue } from "../StateProvider";
import { actionTypes } from "../reducer";
import { Link, useHistory } from "react-router-dom";
import { TextField, FormLabel, Button } from "@material-ui/core";
import { auth, storage, db } from "../firebase";
import logo from "../assets/logo.png";
import "./Register.css";

export default function Register() {
  const [name, setName] = useState("");
  const [profilePic, setProfilePic] = useState(null);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [dispatch] = useStateValue();
  const history = useHistory();

  const handleChange = (e) => {
    setProfilePic(e.target.files[0]);
  };

  const registerUser = () => {
    const uploadTask = storage
      .ref(`/profielFotos/${profilePic.name}`)
      .put(profilePic);

    uploadTask.on("state_changed", console.log, console.error, () => {
      storage
        .ref("profielFotos")
        .child(profilePic.name)
        .getDownloadURL()
        .then((url) => {
          auth
            .createUserWithEmailAndPassword(email, password)
            .then((result) => {
              result.user
                .updateProfile({
                  displayName: name,
                  photoURL: url,
                })
                .then(() => {
                  db.collection("users").doc(result.user.uid).set({
                    displayName: name,
                    telefoon: phone,
                    email: email,
                  });
                })
                .then(() => {
                  dispatch({
                    type: actionTypes.SET_USER,
                    user: {
                      displayName: result.user.displayName,
                      uid: result.user.uid,
                      email: result.user.email,
                      photoURL: url,
                    },
                  });
                });
            })
            .then(() => history.push("/"))
            .catch((error) => alert(error.message));
        });
    });
  };

  return (
    <div className='register'>
      <div className='register__container'>
        <img src={logo} alt='Leren budgetteren logo' />
        <h1>Registreren bij Leren budgetteren</h1>
        <TextField
          type='text'
          label='Name'
          variant='outlined'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <FormLabel>Choose a profile picture</FormLabel>
        <input title='Titel' type='file' onChange={handleChange} />
        <TextField
          type='email'
          label='Email'
          variant='outlined'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          type='tel'
          label='Phone number'
          variant='outlined'
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <TextField
          type='password'
          label='Password'
          variant='outlined'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button variant='contained' color='primary' onClick={registerUser}>
          Register
        </Button>
        <p>
          Already an account? <Link to='/login'>Click here!</Link>
        </p>
      </div>
    </div>
  );
}
