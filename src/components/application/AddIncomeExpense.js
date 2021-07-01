import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  TextField,
  DialogActions,
  Button,
  FormControlLabel,
  RadioGroup,
  FormControl,
  FormLabel,
  Radio,
  InputLabel,
  MenuItem,
  Select,
} from "@material-ui/core";
import { db } from "../../firebase";
import firebase from "firebase";
import { useStateValue } from "../../StateProvider";

export default function AddIncomeExpense({ open, setOpen }) {
  const [{ user }] = useStateValue();
  const [type, setType] = useState("");
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const handleClose = () => {
    setOpen(false);
  };

  const submitForm = (e) => {
    e.preventDefault();

    db.collection(`users/${user.uid}/${type}`).add({
      title: title,
      category: category,
      amount: Number(amount),
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setOpen(false);
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby='form-dialog-title'
    >
      <DialogTitle id='form-dialog-title'>Add income or expense</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Add an income or expense to your list by filling in the following
          form.
        </DialogContentText>
        <TextField
          autoFocus
          margin='dense'
          label='Title'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          fullWidth
        />
        <FormControl component='fieldset'>
          <FormLabel component='legend'>Type?</FormLabel>
          <RadioGroup
            row
            aria-label='position'
            defaultValue='top'
            value={type}
            onChange={(e) => setType(e.target.value)}
            name='Type'
          >
            <FormControlLabel
              value='income'
              control={<Radio color='primary' />}
              label='Income'
            />
            <FormControlLabel
              value='expenses'
              control={<Radio color='primary' />}
              label='Expense'
            />
          </RadioGroup>
        </FormControl>
        <InputLabel>Categorie</InputLabel>
        <FormControl variant='outlined' fullWidth>
          <Select
            name='categorie'
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <MenuItem value='salary'>Salary</MenuItem>
            <MenuItem value='supermarket'>Supermarket</MenuItem>
            <MenuItem value='phone'>Phone subscription</MenuItem>
          </Select>
        </FormControl>
        <TextField
          autoFocus
          margin='dense'
          label='Amount'
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          fullWidth
        />
        <TextField
          autoFocus
          margin='dense'
          label='Date'
          type='date'
          InputLabelProps={{
            shrink: true,
          }}
          value={date}
          onChange={(e) => setDate(e.target.value)}
          fullWidth
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color='primary'>
          Cancel
        </Button>
        <Button
          onClick={submitForm}
          color='primary'
          disabled={!type || !title || !category || !amount || !date}
        >
          Add
        </Button>
      </DialogActions>
    </Dialog>
  );
}
