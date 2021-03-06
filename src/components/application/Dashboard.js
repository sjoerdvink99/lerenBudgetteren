import React, { useState, useEffect } from "react";
import { useStateValue } from "../../StateProvider";
import Chart from "./Chart";
import { db } from "../../firebase";
import DashboardOverview from "./DashboardOverview";
import ArticleRecommendation from "./ArticleRecommendation";
import "./Dashboard.css";

export default function Dashboard() {
  const [{ user }] = useStateValue();
  const [income, setIncome] = useState([]);
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    db.collection(`users/${user.uid}/income`)
      .limit(3)
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setIncome(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            title: doc.data().title,
            timestamp: doc.data().timestamp,
            amount: doc.data().amount,
          }))
        )
      );
  }, [user.uid]);

  useEffect(() => {
    db.collection(`users/${user.uid}/expenses`)
      .limit(3)
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setExpenses(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            title: doc.data().title,
            timestamp: doc.data().timestamp,
            amount: doc.data().amount,
          }))
        )
      );
  }, [user.uid]);

  return (
    <div className='dashboard'>
      <DashboardOverview income={income} expenses={expenses} />
      <div className='dashboard__other'>
        <div className='dashboard__left'>
          <Chart income={income} expenses={expenses} />
        </div>
        <div className='dashboard__right'>
          <ArticleRecommendation />
        </div>
      </div>
    </div>
  );
}
