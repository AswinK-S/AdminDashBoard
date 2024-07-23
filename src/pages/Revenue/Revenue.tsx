import React from 'react'
import SearchBar from '../../components/SearchBar'
import SideBar from '../../components/SideBar'

const Revenue: React.FC = () => {
    return (
        <>
            <div className='flex flex-col h-screen bg-gray-100'>
                <SearchBar />
                <div className='flex flex-1 overflow-hidden'>
                    <SideBar/>
                    <div>
                        
                    </div>
                </div>
            </div>
        </>
    )
}
export default Revenue