import React from 'react'
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const Sidebar = () => {
    const [open, setOpen] = useState(true);
    const toggleMenu =()=>{
        setOpen((prev)=>!prev)
    }
  return (
   <>
   {!open && <div onClick={toggleMenu} className='bg-gray-700 flex flex-col gap-0 absolute cursor-pointer text-white  px-2 transition-all'>
        {/* <p className='text-2xl'>Sidebar </p> */}
        <p className='text-4xl'>➡</p>
    </div>}
    <div className={`w-70 z-60 md:w-1/4 transition-transform  duration-500  absolute  left-0  bg-gray-50 h-full ${open ? 'translate-x-0':'-translate-x-full'}`}>
        <div className='left-0 flex flex-col gap-2 p-4'>
            <div onClick={toggleMenu} className='border-b-gray-600 cursor-pointer'>
                {open &&<p className='text-4xl  text-right  '>⬅</p> }
            </div>
        
                <NavLink to='/add' onClick={()=> setOpen(false)} className='text-lg sm:text-xl p-2 text-center bg-amber-50 rounded-lg border border-amber-100 w-full' >Add Product</NavLink>
            
                <NavLink to='/' onClick={()=> setOpen(false)}  className=' text-lg bg-amber-50 sm:text-xl p-2 text-center  rounded-lg border border-amber-100 ' > Products List</NavLink>
          
                <NavLink to='/orders' onClick={()=> setOpen(false)}  className=' text-lg sm:text-xl p-2 text-center bg-amber-50 border border-amber-100 rounded-lg' >Orders</NavLink>
        </div>
    </div>
   </>
  )
}

export default Sidebar