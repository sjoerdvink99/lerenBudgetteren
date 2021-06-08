import React, { useState } from "react";
import {
  Typography,
  TableContainer,
  TableHead,
  Table,
  TableRow,
  TableCell,
  TableBody,
  Button,
} from "@material-ui/core";
import AddStock from "./AddStock";
import "./Portfolio.css";

export default function Portfolio({ stocks }) {
  const [open, setOpen] = useState(false);

  return (
    <div className='portfolio'>
      <div className='portfolio__head'>
        <Typography variant='h4'>Portfolio</Typography>
        <Button
          variant='outlined'
          color='primary'
          onClick={() => setOpen(true)}
        >
          Add
        </Button>
      </div>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Ticker</TableCell>
              <TableCell>Company</TableCell>
              <TableCell>GAK</TableCell>
              <TableCell>Amount</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {stocks?.map(({ id, ticker, company, GAK, amount }) => (
              <TableRow key={id}>
                <TableCell>{ticker}</TableCell>
                <TableCell>{company}</TableCell>
                <TableCell>{GAK}</TableCell>
                <TableCell>{amount}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <AddStock open={open} setOpen={setOpen} />
    </div>
  );
}
