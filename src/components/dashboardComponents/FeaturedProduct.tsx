import React from 'react';
import productImage from '../../../public/products/watch.jpeg';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const FeaturedProduct: React.FC = () => {
    return (
        <div className='bg-white p-4 rounded-lg shadow'>
            <h2 className="text-lg font-semibold mb-4">Featured Product</h2>
            <div className="flex items-center justify-between">
                <IoIosArrowBack className="text-gray-400 cursor-pointer" />
                <div className="text-center">
                    <img src={productImage} alt="Beats Headphone 2019" className="mx-auto mb-4 w-56 h-56 object-cover" />
                    <h3 className="font-semibold">Beats Headphone 2019</h3>
                    <p className="text-blue-500">$89.00</p>
                </div>
                <IoIosArrowForward className="text-gray-400 cursor-pointer" />
            </div>
        </div>
    );
};

export default FeaturedProduct;