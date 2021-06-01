import React, { useState } from "react";
import ProfileSidebar from "./ProfileSidebar";
import "./AccountDetails.css";
import { Button, TextField, Avatar } from "@material-ui/core";

export default function AccountDetails() {
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
          <Avatar src='#' alt='' />
        </div>
      </div>
    </div>
  );
}
