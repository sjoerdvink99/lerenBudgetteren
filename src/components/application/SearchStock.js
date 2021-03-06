import React, { useState } from "react";
import AddStock from "./AddStock";
import { Button, TextField, Typography } from "@material-ui/core";
import "./SearchStock.css";

export default function SearchStock() {
  const [search, setSearch] = useState("");
  const [stock, setStock] = useState({});
  const [open, setOpen] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  const fetchStock = async (search) => {
    const url = `https://www.alphavantage.co/query?function=OVERVIEW&symbol=${search}&apikey=8F8QUFQNNK2RFG92`;
    const response = await fetch(url);
    const data = await response.json();
    setStock(data);
    setShowDetails(true);
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
      {showDetails && (
        <>
          <Typography variant='body1'>Name: {stock?.Name}</Typography>
          <Typography variant='body1'>Exchange: {stock?.Exchange}</Typography>
          <Typography variant='body1'>Industry: {stock?.Industry}</Typography>
          <Typography variant='body1'>
            Dividend: {stock?.DividendPerShare}
          </Typography>
          <Typography variant='body1'>EPS: {stock?.EPS}</Typography>
          <Typography variant='body1'>PE: {stock?.PEGRatio}</Typography>
          <Button
            variant='outlined'
            color='primary'
            onClick={() => setOpen(true)}
            fullWidth
          >
            Add stock to portfolio
          </Button>
        </>
      )}
      <AddStock open={open} setOpen={setOpen} data={stock} />
    </div>
  );
}
