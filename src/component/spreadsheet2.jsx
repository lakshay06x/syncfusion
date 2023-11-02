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
        <SpreadsheetComponent className="comp" showSheetTabs={false} showRibbon={false} showFormulaBar={false}
          sheets={[
            {
              
              // frozenColumns: 2,
              // frozenRows: 2,
              isProtected: true,
              rows: [
                {
                  index: 0,
                  cells: [
                    { index: 0, value: "SNO.",style: {backgroundColor: "#808080"} },
                    { index: 1, value: "Average", style: {backgroundColor: "#808080"} },
                    { index: 2, value: "Difference", style: {backgroundColor: "#808080"} },
                  ],
                },
                ...defaultData.map((item) => ({
                  index: parseInt(item["SNO."]),
                  cells: [
                    { index: 0, value: item["SNO."], style: {backgroundColor: "#808080"} },
                    { index: 1, value: averageValues[item["SNO."]] || "" , style: {backgroundColor: "#FFCC99"}},
                    { index: 2, value: differenceValues[item["SNO."]] || "" , style: {backgroundColor: "#FFCC99"}},
                  ],
                })),
              ],
            },
          ]}
        ></SpreadsheetComponent>
      </div>
    </div>
  );
}
export default Spreadsheet;