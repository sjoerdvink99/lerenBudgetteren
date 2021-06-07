import React, { useState, useEffect } from "react";
import { useStateValue } from "../../StateProvider";
import ProfileSidebar from "./ProfileSidebar";
import { db, auth } from "../../firebase";
import "./AccountDetails.css";
import { Button, TextField, Avatar, Typography } from "@material-ui/core";

export default function AccountDetails() {
  const [{ user }] = useStateValue();
  const [gebruiker, setGebruiker] = useState("");

  useEffect(() => {
    db.doc(`users/${user.uid}`)
      .get()
      .then((user) =>
        setGebruiker({
          displayName: user.data().displayName,
          email: user.data().email,
          telefoon: user.data().telefoon,
        })
      )
      .catch((error) => alert(error.message));
  }, [user.uid]);

  const updateProfile = () => {
    auth.currentUser
      .updateProfile({
        displayName: gebruiker.displayName,
        email: gebruiker.email,
      })
      .then(() => {
        db.doc(`users/${user.uid}`).update({
          displayName: gebruiker.displayName,
          email: gebruiker.email,
          telefoon: gebruiker.telefoon,
        });
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className='accountDetails'>
      <ProfileSidebar />
      <div className='accountDetails__container'>
        <div className='accountDetails__containerHead'>
          <Typography variant='h4' align='center'>
            My profile
          </Typography>
        </div>
        <div className='accountDetails__containerMain'>
          <div className='accountDetails__containerLeft'>
            <TextField
              variant='outlined'
              label='First name'
              InputLabelProps={{
                shrink: true,
              }}
              value={gebruiker?.displayName}
              onChange={(e) =>
                setGebruiker({ ...gebruiker, displayName: e.target.value })
              }
            />
            <TextField
              variant='outlined'
              label='Phone'
              InputLabelProps={{
                shrink: true,
              }}
              value={gebruiker?.telefoon}
              onChange={(e) =>
                setGebruiker({ ...gebruiker, telefoon: e.target.value })
              }
            />
            <TextField
              variant='outlined'
              label='Email'
              InputLabelProps={{
                shrink: true,
              }}
              value={gebruiker?.email}
              onChange={(e) =>
                setGebruiker({ ...gebruiker, email: e.target.value })
              }
            />
            <Button color='primary' variant='contained' onClick={updateProfile}>
              Update profile
            </Button>
          </div>
          <div className='accountDetails__containerRight'>
            <Avatar src={user.photoUrl} alt={user.displayName} />
          </div>
        </div>
      </div>
    </div>
  );
}
