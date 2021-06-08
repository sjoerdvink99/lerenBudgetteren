import React, { useState, useEffect } from "react";
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
import { db } from "../../firebase";
import AddStock from "./AddStock";
import { useStateValue } from "../../StateProvider";
import "./Portfolio.css";

export default function Portfolio() {
  const [{ user }] = useStateValue();
  const [stocks, setStocks] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    db.collection(`users/${user.uid}/stocks`).onSnapshot((snapshot) =>
      setStocks(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          ticker: doc.data().ticker,
          company: doc.data().company,
        }))
      )
    );
  }, [user.uid]);

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
            </TableRow>
          </TableHead>
          <TableBody>
            {stocks?.map(({ id, ticker, company }) => (
              <TableRow>
                <TableCell>{ticker}</TableCell>
                <TableCell>{company}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <AddStock open={open} setOpen={setOpen} />
    </div>
  );
}
