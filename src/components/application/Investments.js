import React, { useEffect, useState } from "react";
import Portfolio from "./Portfolio";
import { db } from "../../firebase";
import { Typography } from "@material-ui/core";
import { useStateValue } from "../../StateProvider";
import "./Investments.css";

export default function Investments() {
  const [{ user }] = useStateValue();
  const [stocks, setStocks] = useState([]);

  useEffect(() => {
    db.collection(`users/${user.uid}/stocks`).onSnapshot((snapshot) =>
      setStocks(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          ticker: doc.data().ticker,
          company: doc.data().company,
          amount: doc.data().amount,
          GAK: doc.data().GAK,
        }))
      )
    );
  }, [user.uid]);
  return (
    <div className='investments'>
      <Portfolio stocks={stocks} />
      <div className='investments__other'>
        <div className='investments__left'>
          <Typography variant='h5'>Diversivication</Typography>
        </div>
        <div className='investments__right'>
          <Typography variant='h5'>Search stocks</Typography>
        </div>
      </div>
    </div>
  );
}
