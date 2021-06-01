import React from "react";
import { Typography } from "@material-ui/core";
import salary from "../../assets/salary.png";
import supermarket from "../../assets/supermarket.png";
import other from "../../assets/other.png";
import subscription from "../../assets/subscription.png";
import "./IncomeExpenseRow.css";

export default function IncomeExpenseRow({ title, timestamp, amount }) {
  return (
    <div className='incomeExpenseRow'>
      <div className='incomeExpenseRow__image'>
        <img
          src={
            title === "Supermarket"
              ? supermarket
              : title === "Salary"
              ? salary
              : title === "Subscription"
              ? subscription
              : other
          }
          alt={title}
        />
      </div>
      <div className='incomeExpenseRow__text'>
        <Typography variant='h6'>{title}</Typography>
        <Typography variant='body1'>
          {new Date(timestamp?.toDate()).toLocaleDateString("eu-NL", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
          })}
        </Typography>
      </div>
      <div className='incomeExpenseRow__money'>
        <Typography variant='body1'>€{amount}</Typography>
      </div>
    </div>
  );
}
