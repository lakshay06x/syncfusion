import React, { useState, useEffect } from "react";
import "./styles/ss2.css";
import { SpreadsheetComponent } from "@syncfusion/ej2-react-spreadsheet";

// eslint-disable-next-line import/first
import { defaultData } from "../data";

function Spreadsheet() {
  const [averageValues, setAverageValues] = useState({});
  const [differenceValues, setDifferenceValues] = useState({});

  useEffect(() => {
    // Calculate the average and difference values for each "SNO."
    const avgValues = {};
    const diffValues = {};

    defaultData.forEach((item) => {
      const sno = item["SNO."];
      const low = parseFloat(item.Low);
      const medium = parseFloat(item.Medium);
      const high = parseFloat(item.High);

      const average = (low + medium + high) / 3;
      const difference = high - low; // Adjust this calculation based on your specific difference requirement

      avgValues[sno] = average.toFixed(2);
      diffValues[sno] = difference.toFixed(2);
    });

    setAverageValues(avgValues);
    setDifferenceValues(diffValues);
  }, []);

  return (

    <div className="container">
      
      <div className="s2">
    <h3 id="br">Calculated Data</h3>
    <SpreadsheetComponent
      allowOpen={true}
      openUrl="https://ej2services.syncfusion.com/production/web-services/api/spreadsheet/open"
      allowSave={true}
      saveUrl="https://ej2services.syncfusion.com/production/web-services/api/spreadsheet/save"
      sheets={[
        {
          rows: [
            {
              index: 0,
              cells: [
                { index: 0, value: "SNO." },
                { index: 1, value: "Average" },
                { index: 2, value: "Difference" },
              ],
            },
            ...defaultData.map((item) => ({
              index: parseInt(item["SNO."]),
              cells: [
                { index: 0, value: item["SNO."] },
                { index: 1, value: averageValues[item["SNO."]] || "" },
                { index: 2, value: differenceValues[item["SNO."]] || "" },
              ],
            })),
          ],
        },
      ]}
    ></SpreadsheetComponent>
  </div></div>
    
  );
}
export default Spreadsheet;
