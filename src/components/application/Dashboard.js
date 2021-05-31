import React, {useState, useEffect} from "react";
import { Typography, Button } from "@material-ui/core";
import IncomeExpenseRow from "./IncomeExpenseRow";
import {useStateValue} from '../../StateProvider'
import {db} from '../../firebase'
import "./Dashboard.css";

export default function Dashboard() {
  const [{user}] = useStateValue()
  const [income, setIncome] = useState([])
  const [expenses, setExpenses] = useState([])

  useEffect(() => {
    db.collection(`users/${user.uid}/income`)
      .limit(4)
      .onSnapshot((snapshot) => 
        setIncome(snapshot.docs.map((doc) => ({
          id: doc.id,
          title: doc.data().title,
          timestamp: doc.data().timestamp,
          amount: doc.data().amount,
        }))
        )
      ) 
  }, [user.uid])

  useEffect(() => {
    db.collection(`users/${user.uid}/expenses`)
      .limit(4)
      .onSnapshot((snapshot) => 
        setExpenses(snapshot.docs.map((doc) => ({
          id: doc.id,
          title: doc.data().title,
          timestamp: doc.data().timestamp,
          amount: doc.data().amount,
        }))
        )
      ) 
  }, [user.uid])

  return (
    <div className='dashboard'>
      <div className='dashboard__buttons'>
        <Typography variant='h4'>Income and expenses</Typography>
        <Button color='primary' variant='contained'>Add</Button>
      </div>
      <div className='dashboard__overview'>
        <div className='dashboard__income'>
          {income.map(({title, timestamp, amount}) => (
            <IncomeExpenseRow title={title} timestamp={timestamp} amount={amount} />
          ))}
        </div>
        <div className='dashboard__expense'>
        {expenses.map(({title, timestamp, amount}) => (
            <IncomeExpenseRow title={title} timestamp={timestamp} amount={amount} />
          ))}
        </div>
      </div>
      <div className='dashboard__export'>
        <Button color='primary' variant='contained'>Predictions</Button>
        <Button color='primary' variant='outlined'>Export to Excel</Button>
      </div>
    </div>
  );
}
