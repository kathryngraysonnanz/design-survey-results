import * as React from "react";
import {
  Chart,
  ChartSeries,
  ChartSeriesItem,
  ChartLegend,
  ChartTooltip,
  ChartArea
} from "@progress/kendo-react-charts";

export default function InternalExternal () {

  const series = [
    {
      category: 'Internal (for my company)',
      value: 41,
    },
    {
      category: 'External (for other companies)',
      value: 21,
    },
    {
      category: 'Both',
      value: 36,
    },
  ];

return (
  <Chart>
    <ChartArea height={250}/>
    <ChartTooltip format="{0}%"/>
    <ChartLegend position="bottom" orientation="vertical"/>
    <ChartSeries>
      <ChartSeriesItem
        type="pie"
        data={series}
        field="value"
        categoryField="category"
      />
    </ChartSeries>
  </Chart>
  )
};