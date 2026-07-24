import React from 'react'
import Title from '../component/Title'
import { assets } from '../assets/frontend_assets/assets'

const Contact = () => {
  return (
    <div >
      <div className='text-3xl mb-10'>
        <Title title1='Contact' title2='Us' />
      </div>
      <div className='flex flex-col md:flex-row gap-8 items-center w-full justify-center'>
          <img src={assets.contact_img} alt="contact us" className='sm:h-120' />
          <div className=' h-full p-3 py-8 flex flex-col items-start justify-center gap-4 border-l-4 border-l-gray-500 text-lg sm:text-xl text-gray-900'>
            <p>Our store</p>
            <p>New Delhi <br />India</p>
            <p>phone : 91+ 22888XXXXX <br />email : shopingo@gmail.com</p>
            <p>contact for job openings </p>
            <p>available mon-fri <br />10:00 am to 6:00 pm</p>
            <button className='p-2 px-6 text-black text-2xl transition-all duration-500 cursor-pointer bg-white border border-gray-400 hover:text-white hover:bg-black '>Contact us</button>
          </div>
      </div>
    </div>
  )
}

export default Contact