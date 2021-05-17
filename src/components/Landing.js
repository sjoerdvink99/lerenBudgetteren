import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./Landing.css";
import landinghead from "../assets/landing-header.png";
import { Typography, Button } from "@material-ui/core";
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div className='landingpage'>
      <Navbar />
      <div className='landing'>
        <div className='landing__left'>
          <Typography variant='h4'>Your financial assistance</Typography>
          <Typography variant='body1'>
            View tutorials, smart investments and create your own budget today!
          </Typography>
          <div className='landing__leftButtons'>
            <Button
              component={Link}
              to='/example1'
              variant='contained'
              color='primary'
              className='landing__leftButtonsLeft'
            >
              Learn how to budget
            </Button>
            <Button
              component={Link}
              to='/example2'
              variant='outlined'
              color='primary'
            >
              View tutorial
            </Button>
          </div>
        </div>
        <div className='landing__right'>
          <img src={landinghead} alt='Leren budgetteren' />
        </div>
      </div>
      <Footer />
    </div>
  );
}
