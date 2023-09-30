import React from "react";
import './App.css';
import Spreadsheet1 from "./component/spreadsheet1";
import Spreadsheet2 from "./component/spreadsheet2";
import Finalchart from "./component/finalchart";
import { registerLicense } from "@syncfusion/ej2-base";
registerLicense(
  "Ngo9BigBOggjHTQxAR8/V1NHaF5cXmtCf1NpR2pGfV5yd0VHal1UTnJZUj0eQnxTdEZjUH1XcXFRRGBVVER+Wg=="
);
function App() {
  return (
    <div className="App">
      <Spreadsheet1 />
      <Spreadsheet2/>
      <Finalchart/>
      
    </div>
  );
}

export default App;
