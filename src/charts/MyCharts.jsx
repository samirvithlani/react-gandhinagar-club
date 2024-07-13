import React, { useState } from "react";
import { DisplayChart } from "./DisplayChart";

export const MyCharts = () => {
  const [selectedChart, setselectedChart] = useState("bar");
  const [chartOptions, setchartOptions] = useState([
    "bar",
    "line",
    "pie",
    "doughnut",
  ]);
  return (
    <div>
      <h1>My chart</h1>
        <h2>{selectedChart}</h2>    
      <select onChange={(e)=>setselectedChart(e.target.value)}>
        {chartOptions?.map((chart) => {
          return <option value={chart}>{chart}</option>;
        })}
      </select>
      <DisplayChart chartType={selectedChart} />
    </div>
  );
};
