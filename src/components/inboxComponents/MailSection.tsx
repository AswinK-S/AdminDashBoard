import React from 'react'
import { CiMail, CiStar } from "react-icons/ci";
import { FiSend } from "react-icons/fi";
import { SlPencil } from "react-icons/sl";
import { TiInfoOutline } from "react-icons/ti";
import { HiChatBubbleOvalLeftEllipsis } from "react-icons/hi2";
import { RiDeleteBinLine } from "react-icons/ri";
import { FaPlus } from "react-icons/fa6";
import { BiSquareRounded } from "react-icons/bi";


const MailSection: React.FC = () => {
    return (
        // <div className='bg-white p-4 rounded-lg shadow-sm w-64 flex-shrink-0'>
        <div className='bg-white p-4 rounded-lg shadow-sm h-full overflow-y-auto'>

            <button className="bg-blue-500 text-white w-full py-2 rounded-md flex items-center justify-center mb-6">
                <FaPlus className='mr-2' /> Compose
            </button>
            <h2 className="font-semibold mb-4">My Email</h2>
            <div className='space-y-3'>
                <MailItem icon={<CiMail />} label="Inbox" count={1253} active />
                <MailItem icon={<CiStar />} label="Starred" count={245} />
                <MailItem icon={<FiSend />} label="Sent" count={24532} />
                <MailItem icon={<SlPencil />} label="Draft" count={9} />
                <MailItem icon={<TiInfoOutline />} label="Spam" count={14} />
                <MailItem icon={<HiChatBubbleOvalLeftEllipsis />} label="Important" count={18} />
                <MailItem icon={<RiDeleteBinLine />} label="Bin" count={9} />
            </div>
            <h2 className="font-semibold mt-6 mb-4">Label</h2>

            <div className='space-y-3'>
                <LabelItem color="#3B82F6" label="Primary" />
                <LabelItem color="#8B5CF6" label="Social" />
                <LabelItem color="#EAB308" label="Work" />
                <LabelItem color="#EC4899" label="Friends" />
            </div>
            <button className="text-blue-500 flex items-center mt-4">
                <FaPlus className='mr-2' /> Create New Label
            </button>
        </div>
    )
}

const MailItem: React.FC<{ icon: React.ReactNode, label: string, count: number, active?: boolean }> = ({ icon, label, count, active }) => (
    <div className={`flex items-center justify-between ${active ? 'text-blue-500 font-semibold' : 'text-gray-600'}`}>
        <div className='flex items-center'>
            {icon}
            <span className='ml-2'>{label}</span>
        </div>
        <span>{count}</span>
    </div>
)

const LabelItem: React.FC<{ color: string, label: string }> = ({ color, label }) => (
    <div className='flex items-center'>
        <BiSquareRounded style={{ color: color }} className="mr-2" />
        <span className='text-gray-600'>{label}</span>
    </div>
)

export default MailSection