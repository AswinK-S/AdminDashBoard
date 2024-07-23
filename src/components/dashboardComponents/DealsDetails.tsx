import React from 'react'
import appleWatch from '/products/watch.jpeg'
interface Deal {
    productImage: string;
    productName: string;
    location: string;
    dateTime: string;
    amount: string;
    status: string;
}

const dealsData: Deal[] = [
    {
        productImage: appleWatch,
        productName: 'Apple Watch',
        location: '6096 Marjolaine Landing',
        dateTime: '12.09.2019 - 12:53 PM',
        amount: '$34,295',
        status: 'Delivered'

    }
]

const DealsDetails: React.FC = () => {
    return (
        <div className='bg-white rounded-lg shadow-md p-4 w-full'>
            <h2 className='text-xl font-semibold mb-4'>Deals Details</h2>
            <div className='overflow-x-auto'>
                <div className='rounded-tl-lg rounded-tr-lg rounded-bl-lg rounded-br-lg overflow-hidden'>
                    <table className='min-w-full bg-white'>
                        <thead className='bg-slate-200 rounded-t-lg'>
                            <tr className='rounded-t-lg'>
                                <th className='py-2 px-4'>Product Name</th>
                                <th className='py-2 px-4'>Location</th>
                                <th className='py-2 px-4'>Date + Time</th>
                                <th className='py-2 px-4'>Amount</th>
                                <th className='py-2 px-4'>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {dealsData.map((deal, index) => (
                                <tr key={index} className='border-t'>
                                    <td className='py-2 flex items-center'>
                                        <img src={deal.productImage} alt={deal.productName} className='w-10 h-10 mr-2 rounded-full' />
                                        {deal.productName}
                                    </td>
                                    <td className='py-2'>{deal.location}</td>
                                    <td className='py-2'>{deal.dateTime}</td>
                                    <td className='py-2'>{deal.amount}</td>
                                    {deal.status==='Delivered'?(<td className='py-2'><span className='bg-green-400 rounded-full px-2 py-1 text-white'>{deal.status}</span></td>):(null)}
                                    
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default DealsDetails