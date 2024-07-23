import React from 'react'


const ProductBanner: React.FC = () => {
    return (
        <div className='bg-blue-500 text-white p-8 rounded-lg relative overflow-hidden'>
            <button className='absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 rounded-full p-2'>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 19l-7-7 7-7' />
                </svg>
            </button>

            <button className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 rounded-full p-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
            </button>

            <div className='max-w-3xl mx-auto'>
                <p className='text-sm mb-2'>September 12-22</p>
                <h2 className='text-3xl font-bold mb-2'>Enjoy free home delivery in this summer</h2>
                <p className='mb-4'> Designer Dresses - Pick from trendy Designer Dress</p>
                <button className='bg-orange-500 text-white px-4 py-2 rounded'>Get Started</button>
            </div>
        </div>
    )
}

export default ProductBanner