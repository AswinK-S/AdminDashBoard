import React from 'react';
import CanvasJSReact from '@canvasjs/react-charts';

const CanvasJSChart = CanvasJSReact.CanvasJSChart;

const CustomerDoughnut: React.FC = () => {
    const options = {
        animationEnabled: true,
        height: 300,
        backgroundColor: "transparent",
        data: [{
            type: "doughnut",
            innerRadius: "70%",
            showInLegend: false,
            dataPoints: [
                { y: 34249, color: "#3498db" },
                { y: 1420, color: "#ecf0f1" }
            ]
        }]
    }

    return (
        <div className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-4">Customers</h2>
            <CanvasJSChart options={options} />
            <div className="flex justify-between mt-4">
                <div>
                    <p className="text-2xl font-bold text-blue-500">34,249</p>
                    <p className="text-sm text-gray-500">New Customers</p>
                </div>
                <div className="text-right">
                    <p className="text-2xl font-bold text-gray-500">1420</p>
                    <p className="text-sm text-gray-500">Repeated</p>
                </div>
            </div>
        </div>
    );
}

export default CustomerDoughnut;