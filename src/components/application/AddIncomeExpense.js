import React from "react";
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
import "./AddIncomeExpense.css";

export default function AddIncomeExpense({ open, setOpen }) {
  const handleClose = () => {
    setOpen(false);
  };

  const submitForm = (e) => {
    e.preventDefault();
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
          id='name'
          label='Title'
          type='email'
          fullWidth
        />
        <FormControl component='fieldset'>
          <FormLabel component='legend'>Type?</FormLabel>
          <RadioGroup row aria-label='position' defaultValue='top' name='Type'>
            <FormControlLabel
              value='Income'
              control={<Radio color='primary' />}
              label='Income'
            />
            <FormControlLabel
              value='Expense'
              control={<Radio color='primary' />}
              label='Expense'
            />
          </RadioGroup>
        </FormControl>
        <InputLabel>Categorie</InputLabel>
        <FormControl variant='outlined' fullWidth>
          <Select name='categorie' value='categorie'>
            <MenuItem value='Salary'>Salary</MenuItem>
            <MenuItem value='Supermarket'>Supermarket</MenuItem>
            <MenuItem value='Phone subscription'>Phone subscription</MenuItem>
          </Select>
        </FormControl>
        <TextField
          autoFocus
          margin='dense'
          id='name'
          label='Amount'
          type='email'
          fullWidth
        />
        <TextField
          autoFocus
          margin='dense'
          id='name'
          label='Date'
          type='date'
          InputLabelProps={{
            shrink: true,
          }}
          fullWidth
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color='primary'>
          Cancel
        </Button>
        <Button onClick={submitForm} color='primary'>
          Add
        </Button>
      </DialogActions>
    </Dialog>
  );
}
