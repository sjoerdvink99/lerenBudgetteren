import React from "react";
import { Typography } from "@material-ui/core";
import ProfileSidebar from "./ProfileSidebar";
import "./Privacy.css";

export default function Privacy() {
  return (
    <div className='privacy'>
      <ProfileSidebar />
      <div className='privacy__container'>
        <div className='privacy__head'>
          <Typography variant='h4' align='center'>
            Privacy
          </Typography>
        </div>
      </div>
    </div>
  );
}
