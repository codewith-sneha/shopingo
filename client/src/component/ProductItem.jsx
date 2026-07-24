import React, { useContext } from 'react'
import ShopContext from '../context/ShopContext'
import { Link } from 'react-router-dom';

const ProductItem = ({ id, name, price, image }) => {
    const {currency} = useContext(ShopContext);
  return (
    <Link to={`/product/${id}`}>
    <div className='flex flex-col  p-4 gap-3 group shadow-md'>
   <div className='overflow-hidden'>
         <img src={image[0]} alt={name} className='object-cover  w-full md:h-80  h-40 group-hover:scale-105 scale-100 transition-transform duration-500 ease-in-out' />
   </div>
        <p className='text-gray-700 text-xs md:text-base font-medium lg:text-lg truncate'>{name}</p>
        <div className='flex gap-1 text-xs md:text-base lg:text-lg items-center'>
            <p className=''>{currency}</p>
            <p className='text-gray-800'>{price} </p>
        </div>
    </div>
    </Link>
  )
}

export default ProductItem