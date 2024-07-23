import React from 'react'
import SideBar from '../../components/SideBar'
import SearchBar from '../../components/SearchBar'
import MailSection from '../../components/inboxComponents/MailSection'
import MailList from '../../components/inboxComponents/MailList'

const Inbox: React.FC = () => {
    return (
        <div className='flex flex-col h-screen bg-gray-100'>
            <SearchBar />
            <div className='flex flex-1 overflow-hidden'>
                <SideBar />
                <div className="flex flex-col flex-1 overflow-hidden">
                    <div className='flex flex-col md:flex-row flex-1 overflow-hidden p-2 md:p-4'>
                        <div className="md:w-64 flex-shrink-0 mb-4 md:mb-0 md:mr-4 overflow-auto">
                            <MailSection />
                        </div>
                        <div className='flex-1 overflow-auto'>
                            <MailList />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Inbox