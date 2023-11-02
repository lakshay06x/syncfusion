import React from "react";
import './App.css';
import Spreadsheet1 from "./component/spreadsheet1";

import Spreadsheet2 from "./component/spreadsheet2";

import Finalchart from "./component/finalchart";
import { registerLicense } from "@syncfusion/ej2-base";
// import SpreadsheetContainer from "./component/spredsheetContainer";
registerLicense(
  "Ngo9BigBOggjHTQxAR8/V1NHaF5cXmVCf1JpR2pGfV5yd0VHYVZRR3xfQE0DNHVRdkdgWH9dcHZWRmNcUkZ/XkI="
);
function App() {
  return (
    <div className="App">
      <Spreadsheet1/>
      <Spreadsheet2/>
      <Finalchart/>
      
    </div>
  );
}

export default App;
