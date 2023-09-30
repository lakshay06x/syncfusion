import React from "react";
import "./styles/chart.css";
import BarChart from "./barchart"; // Import the BarChart component

const data = [
  { SNO: "S No. 1", Average: 48.33, Difference: 80 },
  { SNO: "S No. 2", Average: 53.33, Difference: 50 },
  { SNO: "S No. 3", Average: 45, Difference: 95 },
  { SNO: "S No. 4", Average: 63.33, Difference: 50 },
  { SNO: "S No. 5", Average: 36.67, Difference: 55 },
];

function Finalchart() {
  return (
    <div className="chart">
      <h3>Bar Chart For Calculated Data</h3>
      <BarChart data={data} />
    </div>
  );
}

export default Finalchart;
