import React from "react";
import { Typography, Button } from "@material-ui/core";
import landinghead from "../../assets/landing-header.png";
import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <div className='header'>
      <div className='header__left'>
        <Typography variant='h4'>Your financial assistance</Typography>
        <Typography variant='body1'>
          View tutorials, smart investments and create your own budget today!
        </Typography>
        <div className='header__leftButtons'>
          <Button
            component={Link}
            to='/example1'
            variant='contained'
            color='primary'
            className='header__leftButtonsLeft'
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
      <div className='header__right'>
        <img src={landinghead} alt='Leren budgetteren' />
      </div>
    </div>
  );
}
