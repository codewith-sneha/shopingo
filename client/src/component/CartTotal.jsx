import React, { useContext } from 'react'
import Title from './Title'
import ShopContext from '../context/ShopContext'

const CartTotal = () => {
    const {totalAmount,deliveryFees,currency }=useContext(ShopContext);
  return (
    <div className='w-full '>
        <div className='text-xl sm:text-2xl '>
            {/* <p>Cart Total </p> 
            <hr className='w-8 font-bold' /> */}
            <Title title1='Cart' title2='Total'/>
        </div>
        <div className='flex flex-col gap-2 p-4 text-gray-700 '>
            <div className='flex justify-between text-base sm:text-lg'>
                <p>Subtotal </p>
                <p>{currency} {totalAmount}</p>

            </div>
            <hr className='text-gray-300'/>
            <div className='flex justify-between text-base sm:text-lg'>
                <p>Delivery fees </p>
                <p>{totalAmount < 1000 ? <p>{currency}40</p> :<p>{currency}0</p>}</p>
            </div>
            <hr className='text-gray-300' />
            <div className='flex justify-between text-base sm:text-xl'>
                <b>Total </b>
                <b>{currency} {totalAmount+deliveryFees}</b>
            </div>
        </div>
    </div>
  )
}

export default CartTotal