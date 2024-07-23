import React from 'react';
import CanvasJSReact from '@canvasjs/react-charts';

const CanvasJSChart = CanvasJSReact.CanvasJSChart;

const RevenueChart: React.FC = () => {
  const options = {
    animationEnabled: true,
    backgroundColor: "transparent",
    title: {
      text: "Revenue",
      fontSize: 20,
      fontWeight: "normal",
      horizontalAlign: "left",
      margin: 20,
    },
    axisX: {
      valueFormatString: "###k",
      interval: 5,
      minimum: 5,
      maximum: 60,
      labelFontSize: 12,
      tickLength: 0,
      lineThickness: 0,
      gridColor: "#F0F0F0",
    },
    axisY: {
      valueFormatString: "#0",
      interval: 20,
      minimum: 0,
      maximum: 100,
      labelFontSize: 12,
      tickLength: 0,
      lineThickness: 0,
      gridColor: "#F0F0F0",
    },
    toolTip: {
      shared: true,
      cornerRadius: 5,
      fontStyle: "normal",
    },
    legend: {
      verticalAlign: "bottom",
      horizontalAlign: "center",
      fontSize: 14,
    },
    data: [
      {
        type: "splineArea",
        name: "Profit",
        showInLegend: true,
        color: "rgba(255, 143, 109, 0.7)",
        lineColor: "rgba(255, 143, 109, 1)",
        markerType: "none",
        dataPoints: [
          { x: 5, y: 20 }, { x: 10, y: 30 }, { x: 15, y: 25 }, { x: 20, y: 35 },
          { x: 25, y: 50 }, { x: 30, y: 40 }, { x: 35, y: 85 }, { x: 40, y: 50 },
          { x: 45, y: 65 }, { x: 50, y: 40 }, { x: 55, y: 55 }, { x: 60, y: 20 }
        ]
      },
      {
        type: "splineArea",
        name: "Sales",
        showInLegend: true,
        color: "rgba(219, 165, 255, 0.7)",
        lineColor: "rgba(219, 165, 255, 1)",
        markerType: "none",
        dataPoints: [
          { x: 5, y: 50 }, { x: 10, y: 40 }, { x: 15, y: 15 }, { x: 20, y: 20 },
          { x: 25, y: 25 }, { x: 30, y: 15 }, { x: 35, y: 20 }, { x: 40, y: 25 },
          { x: 45, y: 10 }, { x: 50, y: 20 }, { x: 55, y: 35 }, { x: 60, y: 70 }
        ]
      }
    ]
  };

  return (
    <div className="  relative">
      <CanvasJSChart options={options} />
      <div className="absolute top-4 right-4">
        <select className="bg-gray-100 border border-gray-300 text-gray-700 py-1 
        px-3 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
          <option>October</option>
        </select>
      </div>
    </div>
  );
}

export default RevenueChart;