import React from "react";
import "./Navbar.css";
import { Button, Typography } from "@material-ui/core";
import logo from "../assets/logo.png";
import { useStateValue } from "../StateProvider";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [{ user }] = useStateValue();

  return (
    <div className='navbar'>
      <div className='navbar__left'>
        <Link to='/'>
          <img src={logo} alt='Leren budgetteren logo' />
        </Link>
      </div>
      <div className='navbar__middle'>
        {!user ? (
          <ul>
            <li>Home</li>
            <li>Product</li>
            <li>Pricing</li>
            <li>Contact</li>
          </ul>
        ) : (
          <ul>
            <li>Dashboard</li>
            <li>Education</li>
            <li>Investments</li>
            <li>Profile</li>
          </ul>
        )}
      </div>
      <div className='navbar__right'>
        {!user ? (
          <>
            <Typography
              component={Link}
              to='/login'
              variant='body1'
              className='navbar__rightLink'
            >
              Login
            </Typography>
            <Button
              component={Link}
              to='/register'
              variant='contained'
              color='primary'
              className='navbar__rightButton'
            >
              Become a member
            </Button>
          </>
        ) : (
          <>
            <Typography
              component={Link}
              to='/settings'
              variant='body1'
              className='navbar__rightLink'
            >
              Settings
            </Typography>
            <Button
              variant='contained'
              color='primary'
              className='navbar__rightButton'
            >
              My plan
            </Button>
          </>
        )}
      </div>
    </div>
  );
}
