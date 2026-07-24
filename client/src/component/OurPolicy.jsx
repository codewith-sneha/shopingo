import React from 'react'
import { assets } from '../assets/frontend_assets/assets'

const OurPolicy = () => {
  return (
    <div className=' grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3  my-20 sm:my-30 gap-6'>
        <div className='flex flex-col items-center '>
            <img src={assets.exchange_icon} alt="" className='h-17 w-17' />
            <p className='text-base sm:text-lg capitalize text-gray-700'>easy exchange policy</p>
            <p className='text-sm sm:text-base text-center text-gray-400'>we offer hassle free exchange policy</p>
        </div>
         <div className='flex flex-col  items-center'>
            <img src={assets.quality_icon} alt="" className='h-17 w-17' />
            <p className='text-base sm:text-lg capitalize text-gray-700'>7-days return policy</p>
            <p className='text-sm sm:text-base text-center text-gray-400'>we offer 7 days free return policy</p>
        </div>
         <div className='flex flex-col  items-center'>
            <img src={assets.support_img} alt="" className='h-17 w-17' />
            <p className='text-base sm:text-lg capitalize text-gray-700'>best customer support</p>
            <p className='text-sm sm:text-base text-center text-gray-400'>we provide 24/7 customer support</p>
        </div>
    </div>
  )
}

export default OurPolicy