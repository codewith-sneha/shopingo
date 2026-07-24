import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
  <div className='bg-gray-50 p-4 mt-10 '>
  <div className='flex flex-col sm:grid gap-15 my-10 mt-20 grid-cols-[3fr_1fr_1fr] '>
    <div className=''>
      <Link to='/'>  <p className='sm:text-3xl text-xl font-bold'>Shopingo</p></Link>
      <p className='w-full md:w-2/3 text-gray-600' >Shopingo is your ultimate destination for discovering the latest trends and timeless essentials. We bring you high-quality products, best sellers, and an effortless shopping experience — all in one place.</p>
    </div>
    <div>
      <p className='text-xl font-medium mb-5'>COMPANY</p>
      <ul className='flex flex-col gap-1 text-gray-700 '>
        <li>Home</li>
        <li>About us</li>
        <li>Delivery</li>
        <li>Privacy</li>
      </ul>
    </div>
<div>
  <p  className='text-xl font-medium mb-5'>GET IN TOUCH</p>
  <ul className='flex flex-col gap-1 text-gray-700 '>
        <li>+91 999-789-7778</li>
        <li>shopingo@gmail.com</li>
      </ul>
</div>
  </div>
<div>
  <hr className='text-gray-500' />
  <p className='text-center text-sm py-5'>copyright 2025@ shopingo.com - All Right Reserved.</p>
</div>
  </div>
  )
}

export default Footer