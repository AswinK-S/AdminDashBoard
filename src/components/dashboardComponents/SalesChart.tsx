import  { Component } from 'react';
import CanvasJSReact from '@canvasjs/react-charts';

class SalesChart extends Component {
  render() {
    const options = {
      animationEnabled: true,
      theme: "light2",
      title: {
        // text: "Sales Details",
        fontSize: 24,
        fontWeight: "bold",
        horizontalAlign: "left",
        margin: 20,
      },
      axisX: {
        valueFormatString: "###k",
        interval: 5,
        minimum: 5,
        maximum: 60,
        labelFontSize: 14,
        crosshair: {
          enabled: true,
          snapToDataPoint: true,
          labelFormatter: function(e: { value: number }) {
            return e.value + 'k';
          }
        }
      },
      axisY: {
        valueFormatString: "#0'%'",
        interval: 20,
        minimum: 20,
        maximum: 100,
        labelFontSize: 14,
        crosshair: {
          enabled: true,
          snapToDataPoint: true,
          labelFormatter: function(e: { value: number }) {
            return e.value + '%';
          }
        }
      },
      data: [{
        type: "line",
        markerType: "circle",
        markerSize: 8,
        xValueFormatString: "###k",
        yValueFormatString: "#0'%'",
        dataPoints: [
          { x: 5, y: 20 },
          { x: 10, y: 40 },
          { x: 15, y: 60 },
          { x: 20, y: 80 },
          { x: 25, y: 100 },
          { x: 30, y: 40 },
          { x: 35, y: 60 },
          { x: 40, y: 80 },
          { x: 45, y: 100 },
          { x: 50, y: 40 },
          { x: 55, y: 60 },
          { x: 60, y: 80 }
        ]
      }]
    };

    return (

        <CanvasJSReact.CanvasJSChart options={options} />
      
    );
  }
}

export default SalesChart;
