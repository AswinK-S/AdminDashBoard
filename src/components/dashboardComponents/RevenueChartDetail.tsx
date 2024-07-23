import React from 'react'
import RevenueChart from './RevenueCharts'

const RevenueChartDetail:React.FC = ()=>{
    return(
        <div className='bg-white rounded-lg shadow-md p-4  w-full'>
            {/* <h2 className='text-xl font-semibold mb-4'>Sales Details</h2> */}
            {/*chart */}
            <RevenueChart/>
        </div>
    )
}

export default RevenueChartDetail