import React, { useState } from "react";
import { Button, TextField, Typography } from "@material-ui/core";
import "./SearchStock.css";

export default function SearchStock() {
  const [search, setSearch] = useState("");
  const [stock, setStock] = useState({});

  const fetchStock = async (search) => {
    const url = `https://www.alphavantage.co/query?function=OVERVIEW&symbol=${search}&apikey=8F8QUFQNNK2RFG92`;
    const response = await fetch(url);
    const data = await response.json();
    setStock(data);
    console.log(data);
  };

  return (
    <div className='searchStock'>
      <Typography variant='h5'>Search stocks</Typography>
      <div className='searchStock__head'>
        <TextField
          variant='outlined'
          label='Ticker'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          fullWidth
        />
        <Button
          variant='outlined'
          color='primary'
          onClick={() => fetchStock(search)}
        >
          Search
        </Button>
      </div>
      <Typography variant='body1'>name: {stock?.Name}</Typography>
      <Typography variant='body1'>exchange: {stock?.Exchange}</Typography>
      <Typography variant='body1'>industry: {stock?.Industry}</Typography>
      <Typography variant='body1'>
        dividend: {stock?.DividendPerShare}
      </Typography>
      <Typography variant='body1'>EPS: {stock?.EPS}</Typography>
    </div>
  );
}
