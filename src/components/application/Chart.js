import React from "react";
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
  };

export default function Chart({data}) {
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