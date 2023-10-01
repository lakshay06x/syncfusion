import React from "react";
import "./styles/ss1.css";
import {
  SpreadsheetComponent,
  SheetDirective,
  SheetsDirective,
  RangeDirective,
  RangesDirective,
} from "@syncfusion/ej2-react-spreadsheet";
// eslint-disable-next-line import/first
import { defaultData } from "../data";

function Spreadsheet() {
  return (
    <div className="container">
      
      <div className="s1">
    <h3 id="ar">Sheet For Data Entry</h3>
      <SpreadsheetComponent
        allowOpen={true}
        openUrl="https://ej2services.syncfusion.com/production/web-services/api/spreadsheet/open"
        allowSave={true}
        saveUrl="https://ej2services.syncfusion.com/production/web-services/api/spreadsheet/save"
      >
        
        <SheetsDirective>
          <SheetDirective>
            <RangesDirective>
              <RangeDirective dataSource={defaultData}></RangeDirective>
            </RangesDirective>
          </SheetDirective>
        </SheetsDirective>
      </SpreadsheetComponent>
    </div>
    </div>
    
  );
}
export default Spreadsheet;
