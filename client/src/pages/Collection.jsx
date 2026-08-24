import React, { useContext, useEffect } from 'react'
import { assets } from '../assets/frontend_assets/assets'
import { useState } from 'react'
import Title from '../component/Title';
import ShopContext from '../context/ShopContext';
import ProductItem from '../component/ProductItem';

const Collection = () => {
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
 const {products , search , showSearch} = useContext(ShopContext);
const [category, setCategory] = useState([]);
const [subCategory, setSubCategory] = useState([]);
const [sort, setSort] = useState('relevent');

const applySort =()=>{
  const prodCopy = filterProducts.slice();
  switch(sort){
    case 'low-high':{
      setFilterProducts(prodCopy.sort((a,b)=>a.price-b.price))
      break;
    }
    case 'high-low':{
      setFilterProducts(prodCopy.sort((a,b)=>b.price-a.price))
      break;
    }
    default:{
appyFilter();
    }
  }
}

const filterCategory = (e)=>{
   console.log(category);
  if(category.includes(e.target.value)){
    setCategory(prev => prev.filter((item) =>item!=e.target.value) )
  }
  else{
    setCategory(prev=>[...prev, e.target.value]);
  }
  console.log(category);
}

const filterSubCategory =(e)=>{
  if(subCategory.includes(e.target.value)){
    setSubCategory(prev => prev.filter((item)=> item !=e.target.value))
  }
  else{
    setSubCategory(prev=>[...prev , e.target.value])
  }
}

const appyFilter = ()=>{
  let productsCopy = products.slice();

  if(search && showSearch){
    productsCopy=productsCopy.filter((item)=>item.name.toLowerCase().includes(search.toLowerCase()));
  }
  if(category.length>0){
    productsCopy=productsCopy.filter((item)=>category.includes(item.category));
  }
  if(subCategory.length>0){
    productsCopy = productsCopy.filter((item)=>subCategory.includes(item.subCategory));
  }
  setFilterProducts(productsCopy)
}

useEffect(()=>{
  appyFilter();
},[category,subCategory,search,showSearch,products])

useEffect(()=>{
  applySort();
},[sort])

 useEffect(()=>{
  setFilterProducts(products);
 },[products])
  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 border-t'>
      {/* filter options  */}
      <div className='min-w-50 lg:min-w-60'>
        <p onClick={()=>(setShowFilter(!showFilter))} className='flex items-center text-gray-700 text-xl  lg:text-2xl sm:mt-6'>
         Filters
          <img src={assets.dropdown_icon} className={`h-5 my-6 m-3 text-black  sm:hidden   ${showFilter ?'rotate-90':''}`} alt="" />
        </p>
        {/* category filter  */}
        <div className={`flex flex-col gap-2 sm:mt-6 p-3 border border-gray-500 rounded-lg ${showFilter?"":"hidden"} sm:flex `}>
          <p className='text-2xl capitalize'>categories</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
           <p className='flex gap-2 capitalize cursor-pointer items-center'>
             <input type="checkbox" name="men" value={"men"} className=' w-3 ' onChange={filterCategory} /> Men
           </p>
            <p className='flex gap-2 capitalize cursor-pointer items-center'>
             <input type="checkbox" name="men" value={"women"} className=' w-3 ' onChange={filterCategory} /> Women
           </p>
            <p className='flex gap-2 capitalize cursor-pointer items-center'>
             <input type="checkbox" name="men" value={"kids"} className=' w-3 ' onChange={filterCategory} /> Kids
           </p>
          </div>
        </div>

         {/*  sub category filter  */}
        <div className={`flex flex-col mt-6 p-3 gap-2 border border-gray-500 rounded-lg sm:flex ${showFilter?"":"hidden"} `}>
         <div> <p className='text-2xl capitalize'>Type</p></div>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
           <p className='flex gap-2 capitalize cursor-pointer items-center'>
             <input type="checkbox" name="men" value={"Topwear"} className=' w-3 '  onChange={filterSubCategory} /> Topwear
           </p>
            <p className='flex gap-2 capitalize cursor-pointer items-center'>
             <input type="checkbox" name="men" value={"Bottomwear"} className=' w-3 ' onChange={filterSubCategory} /> Bottomwear
           </p>
            <p className='flex gap-2 capitalize cursor-pointer items-center'>
             <input type="checkbox" name="men" value={"Winterwear"} className=' w-3 ' onChange={filterSubCategory} /> Winterwear
           </p>
          </div>
        </div>

      </div>


      {/* right side  */}
      <div className='flex-1'>
        {/* header  */}
        <div className='flex flex-col lg:flex-row justify-between items-center text-base md:text-lg lg:text-2xl mb-4'>
          {/* product sort  */}
        <Title title1="ALL" title2="COLLECTIONS" />
        <select onChange={(e)=>(setSort(e.target.value))} className='border-2 border-gray-300 p-2 text-gray-600 text-sm lg:text-base cursor-pointer'>
        <option value="relevent">Sort by: Relevent</option>
        <option value="low-high">Sort by: Low to High</option>
        <option value="high-low">Sort by: High to Low</option>
        </select>
        </div>

        {/* products  */}
        <div className='grid grid-cols-2  lg:grid-cols-4 md:gap-4 gap-1 md:gap-y-4'>
          {filterProducts.map((product,index)=>(
            <div className='md-h-50' key={index}>
              <ProductItem   key={index} id={product._id} name={product.name} price={product.price} image={product.images} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Collection