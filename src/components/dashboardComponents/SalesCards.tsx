

import React from "react";
import { FaUsers, FaBox, FaChartLine, FaClock } from "react-icons/fa";

//interface for the static data
interface StatisticCardProps {
  title: string;
  value: string;
  icon: JSX.Element;
  change: string;
  changeType: 'up' | 'down';
  description: string;
}

//array of static data
const salesData: StatisticCardProps[] = [
  {
    title: "Total User",
    value: "40,689",
    icon: <FaUsers className="text-indigo-200 text-2xl" />,
    change: "8.5%",
    changeType: "up",
    description: "Up from yesterday",
  },
  {
    title: "Total Order",
    value: "10293",
    icon: <FaBox className="text-yellow-200 text-2xl" />,
    change: "1.3%",
    changeType: "up",
    description: "Up from past week",
  },
  {
    title: "Total Sales",
    value: "$89,000",
    icon: <FaChartLine className="text-green-200 text-2xl" />,
    change: "4.3%",
    changeType: "down",
    description: "Down from yesterday",
  },
  {
    title: "Total Pending",
    value: "2040",
    icon: <FaClock className="text-red-200 text-2xl" />,
    change: "1.8%",
    changeType: "up",
    description: "Up from yesterday",
  },
];

const SalesCards: React.FC = () => {
  return (
    <div className="flex flex-wrap justify-between gap-4 p-4">
    {/* mapping over the data  */}
      {salesData.map((data, index) => (
        <div key={index} className="bg-white rounded-lg shadow-sm flex-grow flex flex-col p-4 min-w-[200px]">
          <div className="flex justify-between items-center mb-2">
            <span className="text-gray-500 text-sm">{data.title}</span>
            <div className={`p-2 rounded-full ${
              index === 0 ? 'bg-indigo-100' :
              index === 1 ? 'bg-yellow-100' :
              index === 2 ? 'bg-green-100' :
              'bg-red-100'
            }`}>
              {data.icon}
            </div>
          </div>
          <div className="text-2xl font-bold mb-2">{data.value}</div>
          <div className={`text-sm ${data.changeType === 'up' ? 'text-green-500' : 'text-red-500'}`}>
            {data.changeType === 'up' ? '▲' : '▼'} {data.change} {data.description}
          </div>
        </div>
      ))}
    </div>
  );
}

export default SalesCards;
