import "./Chart.css";
import ChartBar from "./ChartBar";

function Chart(props) {
    let dataPointsValues = props.dataPoints.map(dataPoint => dataPoint.value);
    let totalMaxValue = Math.max(...dataPointsValues)
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
        key={dataPoint.label} 
        value={dataPoint.value} 
        maxValue={totalMaxValue} 
        label={dataPoint.label}
        />
      ))}
    </div>
  );
}

export default Chart;
