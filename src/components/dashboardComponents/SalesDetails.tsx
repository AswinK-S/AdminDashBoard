import React from 'react'
import SalesChart from './SalesChart'

const SalesDetails:React.FC = ()=>{
    return(
        <div className='bg-white rounded-lg shadow-md p-4  w-full'>
            <h2 className='text-xl font-semibold mb-4'>Sales Details</h2>
            {/*chart */}

            <SalesChart/>

        </div>
    )
}

export default SalesDetails