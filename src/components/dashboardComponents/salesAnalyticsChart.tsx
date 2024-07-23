import React from 'react';
import CanvasJSReact from '@canvasjs/react-charts';

const CanvasJSChart = CanvasJSReact.CanvasJSChart;

const SalesAnalyticsChart: React.FC = () => {
    const options = {
        animationEnabled: true,
        height: 300,
        backgroundColor: "transparent",
        axisX: {
            valueFormatString: "YYYY"
        },
        axisY: {
            minimum: 0,
            maximum: 100,
            interval: 25,
            gridColor: "#F0F0F0"
        },
        toolTip: {
            shared: true
        },
        legend: {
            fontSize: 12
        },
        data: [{
            type: "spline",
            name: "Sales",
            showInLegend: true,
            color: "#4880FF",
            dataPoints: [
                { x: new Date(2015, 0), y: 25 },
                { x: new Date(2016, 0), y: 50 },
                { x: new Date(2017, 0), y: 70 },
                { x: new Date(2018, 0), y: 55 },
                { x: new Date(2019, 0), y: 90 }
            ]
        },
        {
            type: "spline",
            name: "Profit",
            showInLegend: true,
            color: "#00B69B",
            dataPoints: [
                { x: new Date(2015, 0), y: 0 },
                { x: new Date(2016, 0), y: 40 },
                { x: new Date(2017, 0), y: 60 },
                { x: new Date(2018, 0), y: 45 },
                { x: new Date(2019, 0), y: 80 }
            ]
        }]
    }

    return (
        <div className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-4">Sales Analytics</h2>
            <CanvasJSChart options={options} />
        </div>
    );
}

export default SalesAnalyticsChart;