import React from 'react'
import { CiStar } from "react-icons/ci";
import { BiSquareRounded } from "react-icons/bi";
import { FaAngleLeft, FaChevronRight } from "react-icons/fa6";
import { MdDelete, MdMoveToInbox } from "react-icons/md";
import { IoIosInformationCircle } from "react-icons/io";

const MailList: React.FC = () => {
    const Mails = [
        { name: 'Jullu Jalal', category: 'Primary', message: 'Our Bachelor of Commerce program is ACBSP-accredited.', time: '8:38 AM' },
        { name: 'Minerva Barnett', category: 'Work', message: 'Get Best Advertiser In Your Side Pocket', time: '8:13 AM' },
        { name: 'Peter Lewis', category: 'Friends', message: 'Vacation Home Rental Success', time: '7:52 PM' },
        { name: 'Anthony Briggs', category: '', message: 'Free Classifieds Using Them To Promote Your Stuff Online', time: '7:52 PM' },
        { name: 'Clifford Morgan', category: 'Social', message: 'Enhance Your Brand Potential With Giant Advertising Blimps', time: '4:13 PM' },
        { name: 'Cecilia Webster', category: 'Friends', message: 'Always Look On The Bright Side Of Life', time: '3:52 PM' },
        { name: 'Harvey Manning', category: '', message: 'Curling Irons Are As Individual As The Women Who Use Them', time: '2:30 PM' },
        { name: 'Willie Blake', category: 'Primary', message: 'Our Bachelor of Commerce program is ACBSP-accredited.', time: '8:38 AM' },
        { name: 'Minerva Barnett', category: 'Work', message: 'Get Best Advertiser In Your Side Pocket', time: '8:13 AM' },
        { name: 'Fanny Weaver', category: '', message: 'Free Classifieds Using Them To Promote Your Stuff Online', time: '7:52 PM' },
        { name: 'Olga Hogan', category: 'Social', message: 'Enhance Your Brand Potential With Giant Advertising Blimps', time: '4:13 PM' },
        { name: 'Lora Houston', category: 'Friends', message: 'Vacation Home Rental Success', time: '7:52 PM' }
    ]

    return (
        <div className='bg-white rounded-lg shadow-sm h-full p-4 overflow-y-auto'>
        {/* <div className='bg-white rounded-lg shadow-sm h-full p-4 overflow-y-auto'> */}

            <div className='flex justify-between items-center mb-4'>
                <div className='relative flex-grow max-w-xl'>
                    <input type="text" placeholder="Search mail" className="w-full pl-10 pr-4 py-2 border rounded-md" />
                    <svg className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </div>
                <div className='flex space-x-2'>
                    <IconButton icon={<MdMoveToInbox />} />
                    <IconButton icon={<IoIosInformationCircle />} />
                    <IconButton icon={<MdDelete />} />
                </div>
            </div>

            <div className='space-y-2'>
                {Mails.map((mail, index) => (
                    <MailItem key={index} {...mail} />
                ))}
            </div>

            <div className='flex justify-between items-center mt-4 text-sm text-gray-500'>
                <span>Showing 1-12 of 1,253</span>
                <div className='flex items-center space-x-2'>
                    <FaAngleLeft />
                    <FaChevronRight />
                </div>
            </div>
        </div>
    )
}

const IconButton: React.FC<{ icon: React.ReactNode }> = ({ icon }) => (
    <button className='p-2 hover:bg-gray-100 rounded-full'>{icon}</button>
)

const MailItem: React.FC<{ name: string, category: string, message: string, time: string }> = ({ name, category, message, time }) => (
    <div className='flex items-center space-x-4 p-2 hover:bg-gray-50 rounded-md'>
        <BiSquareRounded className='text-gray-400' />
        <CiStar className='text-gray-400' />
        <div className='flex-grow flex items-center space-x-2'>
            <span className='font-semibold w-1/5 truncate'>{name}</span>
            {category && <span className={`text-xs px-2 py-1 rounded ${getCategoryColor(category)} w-20 text-center`}>{category}</span>}
            <span className='text-sm text-gray-600 truncate flex-grow'>{message}</span>
            <span className='text-sm text-gray-500 w-20 text-right'>{time}</span>
        </div>
    </div>
)

const getCategoryColor = (category: string) => {
    switch (category) {
        case 'Primary': return 'bg-blue-100 text-blue-800';
        case 'Social': return 'bg-purple-100 text-purple-800';
        case 'Work': return 'bg-yellow-100 text-yellow-800';
        case 'Friends': return 'bg-pink-100 text-pink-800';
        default: return '';
    }
}

export default MailList