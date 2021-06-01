import React, { useState } from "react";
import { useStateValue } from "../../StateProvider";
import ProfileSidebar from "./ProfileSidebar";
import "./AccountDetails.css";
import { Button, TextField, Avatar, Typography } from "@material-ui/core";

export default function AccountDetails() {
  const [{ user }] = useStateValue();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const updateProfile = () => {
    //
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
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <TextField
              variant='outlined'
              label='Last name'
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <TextField
              variant='outlined'
              label='Phone'
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <TextField
              variant='outlined'
              label='Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
