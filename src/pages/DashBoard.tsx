
import React from 'react';
import SideBar from '../components/SideBar';
import SearchBar from '../components/SearchBar';
import SalesCards from '../components/dashboardComponents/SalesCards';
import SalesDetails from '../components/dashboardComponents/SalesDetails';
import DealsDetails from '../components/dashboardComponents/DealsDetails';
import RevenueChartDetail from '../components/dashboardComponents/RevenueChartDetail';
import CustomerDoughnut from '../components/dashboardComponents/CustomerChart';
import SalesAnalyticsChart from '../components/dashboardComponents/salesAnalyticsChart';
import FeaturedProduct from '../components/dashboardComponents/FeaturedProduct';

const Dashboard: React.FC = () => {
    

    return (
        <div className="flex h-screen">
            <SideBar />
            <div className="flex flex-col w-full overflow-auto ml-20 sm:ml-0">
                <div className="sticky top-0 bg-gray-200 z-10">
                    <SearchBar />
                    <h1 className="font-bold text-3xl p-4">Dashboard</h1>
                </div>
                <div className="flex flex-col w-full p-4 gap-4 bg-gray-200">
                    <SalesCards />
                    <SalesDetails />
                    <DealsDetails />
                    <RevenueChartDetail />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <CustomerDoughnut />
                        <FeaturedProduct />
                        <SalesAnalyticsChart />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
