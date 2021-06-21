import React from "react";
import {
  TableContainer,
  Typography,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Button,
} from "@material-ui/core";
import ProfileSidebar from "./ProfileSidebar";
import paymentMethod from "../../assets/payment-methods.jpeg";
import "./Billing.css";

export default function Billing() {
  return (
    <div className='billing'>
      <ProfileSidebar />
      <div className='billing__container'>
        <div className='billing__head'>
          <Typography variant='h4' align='center'>
            Billing
          </Typography>
        </div>
        <div className='billing__main'>
          <div className='billing__left'>
            <Typography variant='h6'>Invoices</Typography>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Date</TableCell>
                    <TableCell>Amount</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>May 2021</TableCell>
                    <TableCell>€9,99</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>June 2021</TableCell>
                    <TableCell>€9,99</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>July 2021</TableCell>
                    <TableCell>€9,99</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </div>
          <div className='billing__right'>
            <Typography variant='h6'>Payment method</Typography>
            <img src={paymentMethod} alt='methods for payment' />
            <Button variant='contained' color='primary'>
              Update method
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
