import React from "react";
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Category,
  Inject,
} from "@syncfusion/ej2-react-charts";

function BarChart({ data }) {
  return (
    <ChartComponent primaryXAxis={{ valueType: "Category" }}>
      <Inject services={[Category]} />
      <SeriesCollectionDirective>
        <SeriesDirective
          dataSource={data}
          xName="SNO"
          yName="Average"
          type="Bar"
          name="Average"
        />
        <SeriesDirective
          dataSource={data}
          xName="SNO"
          yName="Difference"
          type="Bar"
          name="Difference"
        />
      </SeriesCollectionDirective>
    </ChartComponent>
  );
}

export default BarChart;
