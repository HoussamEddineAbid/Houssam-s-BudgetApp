import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";
Chart.register(ArcElement, Tooltip, Legend);


const BarChart = ({ income, expense }) => {
  const labels = ["Frais", "Le Balance", "Revenu"];
  const data = {
    labels: labels,
    datasets: [
      {
        label: "# of Votes",
        data: [expense, income - expense, income],
        backgroundColor: [
          "rgb(255, 30, 45)",
          "rgb(76, 201, 240)",
          "rgb(170, 204, 0)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(75, 192, 192, 1)",
        ],
        borderWidth: 2,
        hoverOffset: 8,
        borderRadius : 20,
        spacing :10
      },
    ],
    options:{
      cutout:100
  }
  };

  return (
    <div>
      <Pie data={data} />
    </div>
  );
};

export default BarChart;
