import React, {useState, useEffect} from "react";
import {useStateValue} from '../../StateProvider'
import Chart from './Chart'
import {db} from '../../firebase'
import DashboardOverview from "./DashboardOverview";
import "./Dashboard.css";
import { Typography } from "@material-ui/core";

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
      <DashboardOverview income={income} expenses={expenses} />
      <div className='dashboard__other'>
        <div className='dashboard__left'>
          <Chart data={income} />
        </div>
        <div className='dashboard__right'>
          <Typography variant='h5'>Articles for you</Typography>
        </div>
      </div>
    </div>
  );
}
