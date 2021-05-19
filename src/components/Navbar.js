import React from "react";
import "./Navbar.css";
import { Button, Typography } from "@material-ui/core";
import logo from "../assets/logo.png";
import { useStateValue } from "../StateProvider";
import { Link } from "react-router-dom";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

export default function Navbar() {
  const [{ user }] = useStateValue();

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <div className='navbar'>
      <div className='navbar__left'>
        <img src={logo} onClick={toggleHome} alt='Leren budgetteren logo' />
      </div>
      <div className='navbar__middle'>
        {!user ? (
          <ul>
            <ScrollLink to='header' smooth='true' offset={-100} duration={500}>
              <li>Home</li>
            </ScrollLink>
            <ScrollLink to='product' smooth='true' offset={-100} duration={500}>
              <li>Product</li>
            </ScrollLink>
            <ScrollLink to='pricing' smooth='true' offset={-100} duration={500}>
              <li>Pricing</li>
            </ScrollLink>
            <ScrollLink to='contact' smooth='true' offset={-100} duration={500}>
              <li>Contact</li>
            </ScrollLink>
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
