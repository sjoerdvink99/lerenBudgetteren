import React from "react";
import Navbar from "./Navbar";
import { Typography, Button } from "@material-ui/core";
import search from "../assets/search.svg";
import "./NoPageFound.css";
import { Link } from "react-router-dom";

export default function NoPageFound() {
  return (
    <div className='nopagefound'>
      <Navbar />
      <div className='nopagefound__container'>
        <Typography variant='h4'>
          Sorry, we didn't find what you were looking for
        </Typography>
        <img src={search} alt='404' />
        <Button
          color='primary'
          variant='contained'
          style={{ color: "white" }}
          component={Link}
          to='/'
        >
          Go back to home
        </Button>
      </div>
    </div>
  );
}
