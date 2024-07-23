import React from 'react'
import pImage from '/products/watch.jpeg'
import { GrFavorite } from "react-icons/gr";

const ProductCard: React.FC = () => {
    const products = [
        {
            image: pImage,
            name: 'Apple Watch Series 4',
            price: '$120.00',
            rating: 4,
            reviews: 131
        },
        {
            image: pImage,
            name: 'Girl Handy Beg',
            price: '$45.30',
            rating: 4,
            reviews: 34
        },
        {
            image: pImage,
            name: 'Beats Headphone',
            price: '$45.30',
            rating: 4,
            reviews: 34
        }

    ]
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {products.map((product, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-4">
                    <div className="relative mb-4">
                        <img src={product.image} alt={product.name} className="w-full h-48  rounded" />
                        <button className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-200 rounded-full p-1">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-200 rounded-full p-1">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                    <div className=' flex justify-between'>
                        <div className=''>
                            <h3 className="font-semibold mb-1">{product.name}</h3>
                            <p className="text-blue-500 font-bold mb-2">{product.price}</p>
                            <div className="flex items-center mb-2">
                                {[...Array(5)].map((_, i) => (
                                    <svg key={i} className={`w-4 h-4 ${i < product.rating ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                                <span className="text-gray-500 text-sm ml-1">({product.reviews})</span>
                            </div>
                            <button className="bg-gray-100 text-black font-semibold px-4 py-2 rounded-xl ">Edit Product</button>
                        </div>
                        <div className=''>
                        <GrFavorite className='text-2xl' />
                        </div>

                    </div>

                </div>
            ))}
        </div>
    );
}

export default ProductCard