import React, { useContext } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import {assets} from '../assets/frontend_assets/assets';
import { useState } from 'react';
import ShopContext from '../context/ShopContext';

const Nav = () => {

    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const {setShowSearch , navigate ,getCartCount , token , setToken ,setCartItems } = useContext(ShopContext);

    const  logout =()=>{
try {
       navigate('/login')
    localStorage.removeItem('token');
    setToken('');
    setCartItems({});
 
} catch (error) {
    console.log(error);
}
    }
  return (
    <div className='flex justify-between items-center gap-2 py-3 my-4 '>
      <Link to='/'>  <p className='sm:text-3xl text-xl font-bold'>Shopingo</p></Link>
            <ul className='hidden sm:flex gap-5 text-xl text-gray-500'>
                <NavLink to="/" className="flex flex-col gap-1 items-center ">
                    <p>Home</p>
                    <hr className={`h-[1.5px] w-2/4 text-gray-700  ${location.pathname === "/" ? "block" :"hidden"}`} />
                </NavLink>
                 <NavLink to="/about" className="flex flex-col gap-1 items-center">
                    <p>About</p>
                    <hr className={`h-[1.5px] w-2/4 text-gray-700 ${location.pathname === "/about" ? "block" :"hidden"}`} />
                </NavLink>
                 <NavLink to="/collection" className="flex flex-col gap-1 items-center">
                    <p>Collections</p>
                    <hr className={`h-[1.5px] w-2/4 text-gray-700 ${location.pathname === "/collections" ? "block" :"hidden"}`} />
                </NavLink>
                 <NavLink to="/contact" className="flex flex-col gap-1 items-center">
                    <p>Contact</p>
                    <hr className={` h-[1.5px] w-2/4 text-gray-700 ${location.pathname === "/contact" ? "block" :"hidden"}`} />
                </NavLink>
            </ul>

            <div className='flex gap-4 sm:gap-6 items-center'>
                <img src={assets.search_icon} alt="search" onClick={()=>setShowSearch(true)} className='h-6 cursor-pointer' />
                <div className='group relative'>
                   <img onClick={()=>token ? null : navigate('/login')} src={assets.profile_icon} alt="profile" className='h-6 cursor-pointer' /> 
                    {token && <div className='group-hover:block hidden dropdown-menu transition-all duration-300 absolute right-0 pt-4 z-30'>
                        <div className='capitalize text-gray-600 px-5 bg-slate-100 py-4 w-35 flex flex-col justify-end items-end gap-2 transition-all'>
                            <Link to=""><p className='hover:text-black cursor-pointer'>my profile</p></Link>
                            <Link to="/orders"><p className='hover:text-black cursor-pointer'>orders</p></Link>
                            <p onClick={()=>logout()} className='hover:text-black cursor-pointer'>logout</p>
                        </div>
                    </div>}
                </div>
                <Link to="/cart" className='relative'>
                <img src={assets.cart_icon} className='w-6 min-w-5' alt="" />
               {getCartCount()>0 ? <div className='right-[-5px] transition-all duration-400 bottom-[-5px]  absolute w-5 h-5 bg-black text-white aspect-square leading-4 rounded-full text-[10px] flex items-center justify-center font-semibold'>
                <p >{getCartCount()}</p>
                </div> :""}
                </Link>
                <img onClick={()=>setIsMenuOpen(true)} src={assets.menu_icon} alt="menu-icon" className='w-5 sm:hidden '/>
            </div>

            {/* side menu for mobile screen */}
             <div className={`transition-transform duration-500 fixed top-0 right-0 z-15 h-full  w-2/3 bg-slate-50 ${!isMenuOpen ? "translate-x-full":"translate-x-0"}`}>
                <div className='flex flex-col gap-3 text-gray-700 '>
                <div className='flex gap-2 text-xl text-gray-500 px-4 py-2 bg-slate-100  ' onClick={()=>setIsMenuOpen(false)}>
                    <img src={assets.dropdown_icon} alt="cross" className='w-4 h-7'/>
                    <p>back</p>
                </div>
                 <ul className=' gap-7 text-xl text-gray-700'>
                <NavLink to="/" className="flex flex-col gap-1 items-center " onClick={()=>setIsMenuOpen(false)}>
                    <p>Home</p>
                    <hr className='h-[1.5px] w-3/4 text-gray-300' />
                </NavLink>
                 <NavLink to="/about" className="flex flex-col gap-1 items-center" onClick={()=>setIsMenuOpen(false)}>
                    <p>About</p>
                    <hr className='h-[1.5px] w-3/4 text-gray-300' />
                </NavLink>
                 <NavLink to="/collection" className="flex flex-col gap-1 items-center" onClick={()=>setIsMenuOpen(false)}>
                    <p>Collections</p>
                    <hr className='h-[1.5px] w-3/4 text-gray-300 ' />
                </NavLink>
                 <NavLink to="/contact" className="flex flex-col gap-1 items-center" onClick={()=>setIsMenuOpen(false)}>
                    <p>Contact</p>
                    <hr className=' h-[1.5px] text-gray-300 w-3/4' />
                </NavLink>
            </ul>
                </div>
            </div>
    </div>
  )
}

export default Nav