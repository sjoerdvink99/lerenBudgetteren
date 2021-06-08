import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  TextField,
  DialogActions,
  Button,
} from "@material-ui/core";
import { db } from "../../firebase";
import { useStateValue } from "../../StateProvider";

export default function AddStock({ open, setOpen }) {
  const [{ user }] = useStateValue();
  const [ticker, setTicker] = useState("");
  const [company, setCompany] = useState("");
  const [amount, setAmount] = useState("");
  const [GAK, setGAK] = useState("");

  const handleClose = () => {
    setOpen(false);
  };

  const submitStockForm = (e) => {
    e.preventDefault();

    db.collection(`users/${user.uid}/stocks`).add({
      ticker: ticker,
      company: company,
      amount: amount,
      GAK: GAK,
    });

    setOpen(false);
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby='form-dialog-title'
      >
        <DialogTitle id='form-dialog-title'>Add stock</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Add a stock to your list by filling in the following form.
          </DialogContentText>
          <TextField
            autoFocus
            margin='dense'
            label='Ticker'
            value={ticker}
            onChange={(e) => setTicker(e.target.value)}
            fullWidth
          />
          <TextField
            autoFocus
            margin='dense'
            label='Company'
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            fullWidth
          />
          <TextField
            autoFocus
            margin='dense'
            label='Amount'
            type='number'
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            fullWidth
          />
          <TextField
            autoFocus
            margin='dense'
            label='General aquisition cost (GAK)'
            type='number'
            value={GAK}
            onChange={(e) => setGAK(e.target.value)}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color='primary'>
            Cancel
          </Button>
          <Button
            onClick={submitStockForm}
            color='primary'
            disabled={!ticker || !company || !amount || !GAK}
          >
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
