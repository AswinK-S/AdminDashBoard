
import React from 'react';
import SideBar from '../components/SideBar';
import SearchBar from '../components/SearchBar';
import SalesCards from '../components/dashboardComponents/SalesCards';
import SalesDetails from '../components/dashboardComponents/SalesDetails';
import DealsDetails from '../components/dashboardComponents/DealsDetails';

const Dashboard: React.FC = () => {
    return (
        <div className="flex h-screen">
            <SideBar />
            <div className="flex flex-col w-full overflow-auto ml-20 sm:ml-0">
                {/* <div className="h-14 flex items-center  shadow-md p-4"> */}
                    <SearchBar />
                {/* </div> */}
                <div className=" flex flex-col w-full p-4 gap-4  bg-gray-200">
                    <h1 className='font-bold text-3xl'>Dashboard</h1>
                    <SalesCards />
                    <SalesDetails/>
                    <DealsDetails/>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
