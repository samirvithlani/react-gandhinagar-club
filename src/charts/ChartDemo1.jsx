import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend,CategoryScale,LinearScale,BarElement } from "chart.js";
import { Bar, Pie } from "react-chartjs-2";
import { Box } from "@mui/material";

ChartJS.register(ArcElement, Tooltip, Legend,CategoryScale,LinearScale,BarElement);

export const ChartDemo1 = () => {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Sales for 2020 (M)",
        data: [3, 2, 2, 1, 5, 6],
        borderColor: ["rgba(255, 206, 86, 0.2)"],
        backgroundColor: [
          "rgba(255, 206, 86, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 99, 132, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        pointBackgroundColor: "rgba(255, 206, 86, 0.2)",
        borderWidth: 4,
      },
    ],
  };
  return (
    <Box sx={{ height: "800px", width: "300px" }}>
      {/* <Pie data={data} /> */}
      <Bar data={data} />
    </Box>
  );
};
