import React, { useContext, useEffect, useState } from 'react'
import ShopContext from '../context/ShopContext'
import { assets } from '../assets/frontend_assets/assets';
import { useLocation } from 'react-router-dom';

const Search = () => {
    const {search , setSearch , showSearch , setShowSearch} = useContext(ShopContext);

    const location = useLocation();

    const [isShow, setIsShow] = useState(false)

    useEffect(()=>{
        console.log("path ",location.pathname)
        if(location.pathname.includes("collection")){
            setIsShow(true);
        }
        else{
            setIsShow(false);
        }
    },[location])

    const handleChange = (e)=>{
setSearch(e.target.value);
    }
  return isShow && showSearch?(
    <div className='flex w-full sm:w-[80vw] justify-center sm:gap-4 items-center  sm:px-40 '>
        <div className='flex p-4 gap-3 items-center relative'>
        <input className='flex-1 w-[80vw] sm:w-[50vw]  outline-none border rounded-lg p-2 sm:p-4 pr-12 text-lg' type="text" placeholder='Search' value={search} onChange={(e)=>handleChange(e)} />
        <img src={assets.search_icon} alt="search" className='h-4 sm:h-6 absolute right-8' />
        </div>
        <img src={assets.cross_icon} onClick={()=>setShowSearch(false)} className='h-5 cursor-pointer' alt="cross" />
    </div>
  ):null
}

export default Search