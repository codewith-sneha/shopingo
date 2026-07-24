import React from 'react'
import Title from '../component/Title'
import { assets } from '../assets/frontend_assets/assets'

const About = () => {
  return (
    <div>
      <div className='text-3xl'>
        <Title title1='About' title2='Us' />
      </div>
      <div className='flex flex-col md:flex-row gap-10 md:gap-0 mt-10'>
        <img src={assets.about_img} alt="about us" className='w-full md:w-1/2 '/>
        <div className='sm:p-8 border-l border-4 border-gray-400 flex flex-col gap-5 md:w-1/2'>
          <div className='p-8 flex flex-col gap-4 '>
          <p className='text-2xl font-extrabold text-gray-800'>Shopingo</p>
          <p className='text-base text-gray-600 sm:text-xl'>Welcome to Shopingo — your one-stop destination for trendy fashion, premium quality products, and a seamless online shopping experience.
At Shopingo, we believe shopping should be simple, enjoyable, and affordable for everyone. Our goal is to bring you the latest styles and best-selling items—from clothing and accessories to lifestyle essentials—all in one place.</p>
        </div>
        <div className='p-8 flex flex-col gap-4 '>
          <p className='text-2xl font-extrabold text-gray-800'>Who We Are</p>
          <p className='text-gray-600 text-base sm:text-xl'>Shopingo is an online shopping platform built with the vision of making quality products accessible to all. We combine modern design, user-friendly features, and carefully curated collections to create an effortless shopping journey for our customers.

Whether you’re shopping for everyday wear, special occasions, or seasonal trends, Shopingo offers products that are stylish, reliable, and budget-friendly.</p>
        </div>
        </div>
      </div>
      <div>
       <div className='my-15 flex flex-col gap-10'>
         <p className='text-2xl md:text-3xl font-extrabold text-gray-800'>What Makes Shopingo Different?</p>
         <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-15'>
            <div className='border-2 border-gray-200 w-full flex flex-col p-4 gap-10 py-10 items-center '>
              <p className=' text-xl sm:text-2xl text-purple-900 text-center'>🛍 Wide Product Variety</p>
              <hr className='w-full bg-gray-300 border-none h-0.5'/>
              <p className='text-base sm:text-xl text-center w-[80%] text-blue-700'>From fashion to lifestyle, our catalog includes something for everyone.</p>
            </div>

             <div className='border-2 border-gray-200 w-full flex flex-col p-4 gap-10 py-10 items-center '>
              <p className=' text-xl sm:text-2xl text-purple-900 text-center'>⚡ Fast & Easy Shopping Experience</p>
              <hr className='w-full bg-gray-300 border-none h-0.5'/>
              <p className='text-base sm:text-xl text-center w-[80%] text-blue-700'>Clean UI, smooth navigation, and quick checkout designed for convenience.</p>
            </div>

             <div className='border-2 border-gray-200 w-full flex flex-col p-4 gap-10 py-10 items-center '>
              <p className=' text-xl sm:text-2xl text-purple-900 text-center'>💯 Quality You Can Trust</p>
              <hr className='w-full bg-gray-300 border-none h-0.5'/>
              <p className='text-base sm:text-xl text-center w-[80%] text-blue-700'>Each product is selected based on quality, comfort, and value.</p>
            </div>

            <div className='border-2 border-gray-200 w-full flex flex-col p-4 gap-10 py-10 items-center '>
              <p className=' text-xl sm:text-2xl text-purple-900 text-center'>🔄 Easy Returns & Support</p>
              <hr className='w-full bg-gray-300 border-none h-0.5'/>
              <p className='text-base sm:text-xl text-center w-[80%] text-blue-700'>We prioritize customer satisfaction with simple return policies and support.</p>
            </div>

            <div className='border-2 border-gray-200 w-full flex flex-col p-4 gap-10 py-10 items-center '>
              <p className=' text-xl sm:text-2xl text-purple-900 text-center'>🔒 Secure Payments</p>
              <hr className='w-full bg-gray-300 border-none h-0.5'/>
              <p className='text-base sm:text-xl text-center w-[80%] text-blue-700'>Shop with confidence—your data and transactions are protected.</p>
            </div>
         </div>
       </div>
      </div>
    </div>
  )
}

export default About