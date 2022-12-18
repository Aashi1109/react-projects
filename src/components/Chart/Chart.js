import React from "react";

import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  const { dataPoints } = props;
  const valueArray = dataPoints.map((dataPoint) => dataPoint.value);
  const maxValue = Math.max(...valueArray);
  // console.log(maxValue)
  return (
    <div className="chart">
      {dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={maxValue}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
