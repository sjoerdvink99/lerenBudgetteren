import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import "./Chart.css";

const options = {
  legend: {
    display: false,
  },
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
  scales: {
    xAxes: [
      {
        type: "time",
        time: {
          format: "DD/MM/YY",
          tooltipFormat: "ll",
        },
        display: false,
      },
    ],
    yAxes: [
      {
        gridLines: {
          display: false,
        },
      },
    ],
  },
  parsing: {
    xAxisKey: "timestamp",
    yAxisKey: "amount",
  },
  plugins: {
    legend: {
      display: false,
    },
  },
};

export default function Chart({ income, expenses }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const total = income.concat(expenses);
    total.forEach((sum) => delete sum.id & delete sum.title);
    setData(total);
  }, [expenses, income]);

  return (
    <div className='chart'>
      {data?.length > 0 && (
        <Line
          data={{
            datasets: [
              {
                backgroundColor: "#23a6f0",
                borderColor: "#98FB98",
                data: data,
              },
            ],
          }}
          options={options}
        />
      )}
    </div>
  );
}
