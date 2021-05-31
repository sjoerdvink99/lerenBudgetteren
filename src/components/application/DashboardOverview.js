import React from 'react'
import { Typography, Button } from "@material-ui/core";
import IncomeExpenseRow from "./IncomeExpenseRow";
import './DashboardOverview.css'

export default function DashboardOverview({income, expenses}) {
    return (
    <div className='dashboardOverview'>
        <div className='dashboardOverview__buttons'>
            <Typography variant='h4'>Income and expenses</Typography>
            <Button color='primary' variant='contained'>Add</Button>
        </div>
        <div className='dashboardOverview__overview'>
            <div className='dashboardOverview__income'>
            {income.map(({id, title, timestamp, amount}) => (
                <IncomeExpenseRow key={id} title={title} timestamp={timestamp} amount={amount} />
            ))}
            </div>
            <div className='dashboardOverview__expense'>
            {expenses.map(({id, title, timestamp, amount}) => (
                <IncomeExpenseRow key={id} title={title} timestamp={timestamp} amount={amount} />
            ))}
            </div>
        </div>
        <div className='dashboardOverview__export'>
            <Button color='primary' variant='contained'>Predictions</Button>
            <Button color='primary' variant='outlined'>Export to Excel</Button>
        </div>
    </div>
    )
}