import React from 'react'
import { IoSearchOutline } from "react-icons/io5";
import { IoIosNotifications } from "react-icons/io";
import { IoIosArrowDropdown } from "react-icons/io";

import adminIcon from '../../public/Icons/adminIcon.jpg'

const SearchBar: React.FC = () => {
    return (
        <div className="w-full flex items-center justify-between p-2 bg-white shadow-sm">
            <div className="flex items-center flex-1 mr-2">
                <IoSearchOutline className='text-gray-400 text-xl mr-2' />
                <input type="text" placeholder="Search" className="w-full" />
            </div>
            <div className="flex items-center">
                <IoIosNotifications className='text-[#0c8ce9] text-2xl mr-2' />
                <img src={adminIcon} alt="" className='w-8 h-8 rounded-full mr-2' />
                <p className="hidden sm:inline mr-1">admin</p>
                <IoIosArrowDropdown className='text-gray-400 text-xl' />
            </div>
        </div>
    )
}

export default SearchBar