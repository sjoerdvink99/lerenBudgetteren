import React, { useEffect, useState } from "react";
import Portfolio from "./Portfolio";
import { db } from "../../firebase";
import { Typography } from "@material-ui/core";
import { useStateValue } from "../../StateProvider";
import { Doughnut } from "react-chartjs-2";
import "./Investments.css";
import SearchStock from "./SearchStock";

const options = {
  elements: {
    point: {
      radius: 0,
    },
  },
  maintainAspectRatio: false,
  tooltips: {
    mode: "index",
    intersect: false,
  },
};

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
          <Typography variant='h5'>Portfolio diversity</Typography>
          <Doughnut
            data={{
              labels: ["AAPL", "IBM"],
              datasets: [
                {
                  label: "# of stocks",
                  data: [3, 3],
                  backgroundColor: [
                    "rgb(255, 99, 132)",
                    "rgb(54, 162, 235)",
                    "rgb(255, 205, 86)",
                  ],
                  hoverOffset: 4,
                },
              ],
            }}
            options={options}
          />
        </div>
        <div className='investments__right'>
          <SearchStock />
        </div>
      </div>
    </div>
  );
}
