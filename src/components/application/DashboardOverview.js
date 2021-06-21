import React, { useState } from "react";
import { CSVLink } from "react-csv";
import { Typography, Button } from "@material-ui/core";
import IncomeExpenseRow from "./IncomeExpenseRow";
import AddIncomeExpense from "./AddIncomeExpense";
import "./DashboardOverview.css";

export default function DashboardOverview({ income, expenses }) {
  const [open, setOpen] = useState(false);

  return (
    <div className='dashboardOverview'>
      <div className='dashboardOverview__buttons'>
        <Typography variant='h4'>Income and expenses</Typography>
        <Button
          color='primary'
          variant='contained'
          onClick={() => setOpen(true)}
        >
          Add
        </Button>
        <AddIncomeExpense open={open} setOpen={setOpen} />
      </div>
      <div className='dashboardOverview__overview'>
        <div className='dashboardOverview__income'>
          {income.map(({ id, title, timestamp, amount }) => (
            <IncomeExpenseRow
              key={id}
              title={title}
              timestamp={timestamp}
              amount={amount}
            />
          ))}
        </div>
        <div className='dashboardOverview__expense'>
          {expenses.map(({ id, title, timestamp, amount }) => (
            <IncomeExpenseRow
              key={id}
              title={title}
              timestamp={timestamp}
              amount={amount}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
