import '../assets/styles/adminDash.css'
import React from 'react'
import { Link } from 'react-router-dom'

// Icons images 
import dashboard from '../../public/Icons/dashboard.png'
import menu from '../../public/Icons/menu.png'
import product from '../../public/Icons/product.png'
import orderList from '../../public/Icons/ordersList.png'
import stock from '../../public/Icons/stock.png'
import todo from '/Icons/todo.png'
import calender from '/Icons/calender.png'
import invoice from '/Icons/invoice.png'
import element from '/Icons/element.png'
import settings from '/Icons/settings.png'


// react icons 
import { MdFavorite } from "react-icons/md";
import { HiChatBubbleOvalLeftEllipsis } from "react-icons/hi2";
import { AiFillFileText } from "react-icons/ai";
import { RiGroupFill } from "react-icons/ri";
import { IoPerson } from "react-icons/io5";
import { TfiPowerOff } from "react-icons/tfi";



const SideBar:React.FC = () => {



    return (
        // <div className="shadow-sm shadow-slate-400 h-full w-20 flex-shrink-0 flex  flex-col items-center py-4 fixed left-0 top-0 bottom-0 z-10 bg-white md:relative">
        <div className="w-16 md:w-20 flex-shrink-0 bg-white shadow-sm shadow-slate-400 flex flex-col items-center py-4 overflow-y-hidden">

            <img src={menu} alt="Menu" className="w-6 h-6 mb-6" />
            <div className="flex flex-col items-center space-y-6 flex-grow">
               <Link to='/'><img src={dashboard} alt="Dashboard" className='w-6 h-6 gray-filter hover:blue-filter' /></Link> 
                <Link to='/product'><img src={product} alt="Product" className='w-6 h-6 gray-filter hover:blue-filter' /></Link>
                <MdFavorite className='w-6 h-6 hover:text-[#0c8ce9] text-gray-400' />
                <img src={orderList} alt="Order List" className='w-6 h-6 gray-filter hover:blue-filter' />
                <Link to='/inbox'> <HiChatBubbleOvalLeftEllipsis className='w-6 h-6 hover:text-[#0c8ce9] text-gray-400' /></Link>
                <img src={stock} alt="Stock" className='w-6 h-6 gray-filter hover:blue-filter' />
                <AiFillFileText className='w-6 h-6 hover:text-[#0c8ce9] text-gray-400' />
                <img src={calender} alt="Calendar" className='w-6 h-6 gray-filter hover:blue-filter' />
                <img src={todo} alt="Todo" className='w-6 h-6 gray-filter hover:blue-filter' />
                <RiGroupFill className='w-6 h-6 hover:text-[#0c8ce9] text-gray-400' />
                <img src={invoice} alt="Invoice" className='w-6 h-6 gray-filter hover:blue-filter' />
                <img src={element} alt="Element" className='w-6 h-6 gray-filter hover:blue-filter' />
                <IoPerson className='w-6 h-6 hover:text-[#0c8ce9] text-gray-400' />
                <img src={settings} alt="Settings" className='w-6 h-6 gray-filter hover:blue-filter' />
            </div>
            <TfiPowerOff className='w-6 h-6 text-gray-400 mt-6' />
        </div>
    )
   

}

export default SideBar


