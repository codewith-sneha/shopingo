import React, { useContext, useState } from 'react'
import Title from '../component/Title'
import CartTotal from '../component/CartTotal'
import { assets } from '../assets/frontend_assets/assets'
import ShopContext from '../context/ShopContext'

const PlaceOrder = () => {
  const [paymentMode, setPaymentMode] = useState('');
  const {navigate} = useContext(ShopContext);
  return (
    <div className='flex justify-between flex-col sm:flex-row'>
      
      {/* left side - collecting information */}
      <div className='flex gap-3 p-3 flex-col w-full sm:w-[550px]'>
          {/* title  */}
          <div className='text-xl sm:text-2xl '>
            <Title title1="Delivery" title2='Information' />
          </div>

          {/* infromation collection form  */}
          <div className='flex flex-col gap-3 w-full'>
            <div className='flex gap-2'>
              <input type="text" placeholder='First name' className='p-3 text-base sm:text-xl border border-gray-400 w-full' />
              <input type="text" placeholder='Last name' className='p-3 text-base sm:text-xl border border-gray-400 w-full' />
            </div>
            <input type="email" placeholder='Email address' className='p-3 text-base sm:text-xl border border-gray-400 w-full' />
            <input type="text" placeholder='Street' className='p-3 text-base sm:text-xl border border-gray-400 w-full' />
            <div className='flex gap-2'>
              <input type="text" placeholder='City' className='p-3 text-base sm:text-xl border border-gray-400 w-full' />
              <input type="text" placeholder='State' className='p-3 text-base sm:text-xl border border-gray-400 w-full' />
            </div>
            <div className='flex gap-2'>
              <input type="number" placeholder='Zip Code' className='p-3 text-base sm:text-xl border border-gray-400 w-full' />
              <input type="text" placeholder='Country' className='p-3 text-base sm:text-xl border border-gray-400 w-full' />
            </div>
            <input type="number" placeholder='phone Number' maxLength={10} minLength={10} className='p-3 text-base sm:text-xl border border-gray-400 w-full' />
          </div>
      </div>

      {/* right side  */}
      <div className='flex flex-col p-3 gap-3 w-full sm:w-1/2'>
        {/* cart total  */}
        <CartTotal/>

          <div className='text-xl sm:text-2xl '>
            <Title title1='Payment' title2='Mode' />
          </div>
        {/* payment methods  */}
        <div className=' flex flex-col sm:flex-row  gap-2 sm:px-10 justify-between'>
          <div onClick={()=>setPaymentMode("stripe")} className='flex gap-3 items-center p-3 px-5 border border-gray-500 rounded-sm'>
            <p className={`rounded-full w-4 h-4 border border-gray-400 font-extrabold ${paymentMode=="stripe"?"bg-blue-600 ":""} `}></p>
            <img src={assets.stripe_logo} className='h-7' alt="paymentMode" />
          </div>
          <div onClick={()=>setPaymentMode("razorpay")} className='flex gap-3 items-center p-3 px-5 border rounded-sm border-gray-500'>
            <p className={`rounded-full w-4 h-4 border border-gray-400 font-extrabold ${paymentMode=="razorpay"?"bg-blue-600 ":""} `}></p>
            <img src={assets.razorpay_logo} alt="paymentMode" className='h-7' />
          </div>
          <div onClick={()=>setPaymentMode("cod")} className='flex gap-3 items-center p-3 px-5 border rounded-sm border-gray-500'>
            <p className={`rounded-full w-4 h-4 border border-gray-400 font-extrabold ${paymentMode=="cod"?"bg-blue-600 ":""} `}></p>
            <p className='text-xl font-extrabold text-blue-800'>Cash On Delivery</p>
          </div>
        </div>

        {/* button for place order  */}
         <button className='text-white bg-black text-2xl p-4 mt-10' onClick={()=>navigate("/orders")}>Place Order</button>
      </div>
    </div>
  )
}

export default PlaceOrder