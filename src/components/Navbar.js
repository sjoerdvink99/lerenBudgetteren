import React, { useState, useRef } from "react";
import "./Navbar.css";
import {
  Avatar,
  Button,
  Typography,
  Popper,
  Grow,
  Paper,
  ClickAwayListener,
  MenuList,
  MenuItem,
} from "@material-ui/core";
import logo from "../assets/logo.png";
import { useStateValue } from "../StateProvider";
import { Link, useHistory } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { actionTypes } from "../reducer";
import { auth } from "../firebase";

export default function Navbar() {
  const history = useHistory();
  const [{ user }, dispatch] = useStateValue();
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);

  const logoutOfApp = () => {
    dispatch({
      action: actionTypes.LOG_OUT,
    });
    auth.signOut();
    history.push("/");
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    }
  }

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
            <Link to='/'>
              <li>Dashboard</li>
            </Link>
            <Link to='/education'>
              <li>Education</li>
            </Link>
            <Link to='/investments'>
              <li>Investments</li>
            </Link>
            <Link to='/profile'>
              <li>Profile</li>
            </Link>
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
            <Avatar
              ref={anchorRef}
              aria-controls={open ? "menu-list-grow" : undefined}
              aria-haspopup='true'
              onClick={handleToggle}
            />
            <Popper
              open={open}
              anchorEl={anchorRef.current}
              role={undefined}
              transition
              disablePortal
            >
              {({ TransitionProps, placement }) => (
                <Grow
                  {...TransitionProps}
                  style={{
                    transformOrigin:
                      placement === "bottom" ? "center top" : "center bottom",
                  }}
                >
                  <Paper>
                    <ClickAwayListener onClickAway={handleClose}>
                      <MenuList
                        autoFocusItem={open}
                        id='menu-list-grow'
                        onKeyDown={handleListKeyDown}
                      >
                        <MenuItem onClick={logoutOfApp}>Log out</MenuItem>
                      </MenuList>
                    </ClickAwayListener>
                  </Paper>
                </Grow>
              )}
            </Popper>
          </>
        )}
      </div>
    </div>
  );
}
