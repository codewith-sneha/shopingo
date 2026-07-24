import React, { useContext } from 'react'
import Sidebar from './Sidebar'
import { AdminContext } from '../context/AdminContext'

const Nav = () => {
  const{setToken} = useContext(AdminContext);
  return (
    <>
    <div className='flex justify-between sm:px-8 md:px-12 items-center p-2 border-b-2 bg-gray-100 border-gray-500'>
        <div >
            <p className='sm:text-3xl text-xl font-bold'>
            Shopingo 
        </p>
        <p className='sm:text-lg text-pink-500 font-semibold  '>
    Admin Panel
        </p>
        </div>
        <button onClick={()=> setToken('')} className='rounded-lg font- bg-black text-white p-1 sm:p-2 px-4 text-lg hover:bg-gray-900 cursor-pointer sm:text-2xl border-2
         '>
            Logout
        </button>
    </div>
  
     <Sidebar/>
   
    </>
  )
}

export default Nav