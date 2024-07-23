// import '../../public/styles/adminDash.css'
import element from '/Icons/element.png'
import settings from '/Icons/settings.png'
import dashboard from '/Icons/dashboard.png'
import invoice from '/Icons/invoice.png'
import dashboard2 from '/Icons/dashboard1.png'
import todo from '/Icons/todo.png'
import calender from '/Icons/calender.png'
import stock from '/Icons/stock.png'
import menu from '/Icons/menu.png'

import { IoSettings } from "react-icons/io5";
import { MdDashboard } from "react-icons/md";
import { MdFavorite } from "react-icons/md";
import { RiGroupFill } from "react-icons/ri";
import { IoPerson } from "react-icons/io5";
import { AiFillFileText } from "react-icons/ai";
import { HiChatBubbleOvalLeftEllipsis } from "react-icons/hi2";
import { IoIosNotifications } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";
import { TfiPowerOff } from "react-icons/tfi";
import { IoIosArrowDropdown } from "react-icons/io";
import { CiMail } from "react-icons/ci";
import { CiStar } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { BiSquareRounded } from "react-icons/bi";
import { FiSend } from "react-icons/fi";
import { SlPencil } from "react-icons/sl";
import { TiInfoOutline } from "react-icons/ti";
import { TbMessageCircleCog } from "react-icons/tb";
import { RiDeleteBinLine } from "react-icons/ri";
import { FaPlus } from "react-icons/fa6";
import { IoIosInformationCircle } from "react-icons/io";
import { MdMoveToInbox } from "react-icons/md";

const Icons = () => {
  return (
    <div>
        <h1 className='text-red-800 font-bold'>hello</h1>
      <img className='gray-filter hover:blue-filter' src={settings} alt=" " />
      <img className='gray-filter hover:blue-filter' src={element} alt=" " />
      <img className='gray-filter hover:blue-filter' src={invoice} alt=" " />
      <img className='gray-filter hover:blue-filter' src={todo} alt=" " />
      <img src={dashboard} alt="" className='gray-filter hover:blue-filter' />
      <img src={calender} alt="" className='gray-filter hover:blue-filter' />
      <img src={stock} alt="" className='gray-filter hover:blue-filter' />
      <img src={menu} alt="" className='gray-filter hover:blue-filter' />

      <img
        src={dashboard2}
        alt="downloaded icon"
        style={{ filter: 'grayscale(100%)' }}
        onMouseOver={(e) => {
          console.log('Mouse over');
          e.currentTarget.style.filter = 'grayscale(0%) sepia(100%) hue-rotate(190deg) saturate(800%) brightness(90%)';
        }}
        onMouseOut={(e) => {
          console.log('Mouse out');
          e.currentTarget.style.filter = 'grayscale(100%)';
        }}
      />


      <h2>hello</h2>< IoSettings className='hover:text-[#0c8ce9] text-8xl  text-gray-400' />
      <MdDashboard className='hover:text-[#0c8ce9] text-8xl  text-gray-400' />
      <MdFavorite className='hover:text-[#0c8ce9] text-8xl  text-gray-400'/>
      <IoPerson className='hover:text-[#0c8ce9] text-8xl  text-gray-400'/>
      <RiGroupFill className='hover:text-[#0c8ce9] text-8xl  text-gray-400'/>
      <AiFillFileText className='hover:text-[#0c8ce9] text-8xl  text-gray-400'/>
      <HiChatBubbleOvalLeftEllipsis className='hover:text-[#0c8ce9] text-8xl  text-gray-400'/>
      <IoIosNotifications className='text-[#0c8ce9] text-6xl'/>
      <IoSearchOutline className='text-gray-400 text-6xl'/>
      <TfiPowerOff className='text-gray-400 text-6xl' />
      <IoIosArrowDropdown className='text-gray-400 text-6xl'/>
      <CiMail className='text-gray-400 text-6xl'/>
      <CiStar className='text-gray-400 text-6xl'/>
      <MdDelete className='text-gray-400 text-6xl'/>
      <BiSquareRounded className='text-gray-400 text-6xl'/>
      <FiSend className='text-gray-400 text-6xl'/>
      <SlPencil className='text-gray-400 text-6xl'/>
      <TiInfoOutline className='text-gray-400 text-6xl'/>
      <TbMessageCircleCog className='text-gray-400 text-6xl'/>
      <RiDeleteBinLine className='text-gray-400 text-6xl' />
      <FaPlus className='text-gray-400 text-6xl'/>
      <IoIosInformationCircle className='text-gray-400 text-6xl'/>
      <MdMoveToInbox className='text-gray-400 text-6xl'/>
    </div>
  )
}

export default Icons