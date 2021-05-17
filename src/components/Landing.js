import React from "react";
import Navbar from "./Navbar";
import "./Landing.css";
import landinghead from "../assets/landing-header.png";
import { Typography, Button } from "@material-ui/core";

export default function Landing() {
  return (
    <>
      <Navbar />
      <div className='landing'>
        <div className='landing__left'>
          <Typography variant='h4'>Your financial assistance</Typography>
          <Typography variant='body1'>
            View tutorials, smart investments and create your own budget today!
          </Typography>
          <div className='landing__leftButtons'>
            <Button variant='contained' color='primary'>
              Learn how to budget
            </Button>
            <Button variant='outlined' color='primary'>
              View tutorial
            </Button>
          </div>
        </div>
        <div className='landing__right'>
          <img src={landinghead} alt='Leren budgetteren' />
        </div>
      </div>
    </>
  );
}
