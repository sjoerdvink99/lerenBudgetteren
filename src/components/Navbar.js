import React from "react";
import "./Navbar.css";
import { Button } from "@material-ui/core";
import { useStateValue } from "../StateProvider";

export default function Navbar() {
  const [{ user }] = useStateValue();

  return (
    <div className='navbar'>
      <div className='navbar__left'>
        <img src='#' alt='Leren budgetteren logo' />
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
            <p>Login</p>
            <Button variant='contained' color='primary'>
              Become a member
            </Button>
          </>
        ) : (
          <>
            <p>Settings</p>
            <Button variant='contained' color='primary'>
              My plan
            </Button>
          </>
        )}
      </div>
    </div>
  );
}
