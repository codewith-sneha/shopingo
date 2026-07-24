import React, { useContext, useEffect, useState } from 'react'
import ShopContext from '../context/ShopContext';
import Title from '../component/Title';
import { assets } from '../assets/frontend_assets/assets';
import { useNavigate } from 'react-router-dom';
import CartTotal from '../component/CartTotal';

const Orders = () => {
    const {cartItems ,totalAmount,navigate, setTotalAmount, UpdateCartItem, currency ,products}=useContext(ShopContext);
  const [cartData, setCartData] = useState([]);

  useEffect(()=>{
    let tempData =[];
   
    for(let items in cartItems){
      for(let item in cartItems[items]){
        if(cartItems[items][item]>0){
          tempData.push({
            _id : items,
            size : item,
            quantity : cartItems[items][item]
          })
        }
      }
    }
    setCartData(tempData);
  },[cartItems]);
  return (
    <div>
        {/* title  */}
        <div className='sm:text-3xl text-xl font-mono '>
             <Title title1="your" title2="Orders" />
        </div>


        {/* listing of order  */}
        <div className='grid grid-cols-1 gap-4 md:w-[80vw]  m-auto'>

         {cartData.map((item,index)=>{
                    const productData = products.find((prev)=>prev._id === item._id);
                    return(
                    <div key={index} className='p-4 border border-gray-400 flex gap-2 relative'>
                     <img src={productData.images[0]} alt="image" className='h-20 w-20 sm:h-40  sm:w-40 object-contain' />
                     <div className='flex flex-col sm:flex-row gap-3 justify-between w-full'>
                      <div className='flex flex-col gap-2 md:gap-4'>
                      <p className='text-xs sm:text-lg'>{productData.name}</p>
                       <p className='text-xs sm:text-lg text-gray-800'>{currency} {productData.price}</p>
                      <div className='flex  gap-4 items-center  '>                      
                      <p className='text-xs bg-gray-200 p-1 w-15 text-center sm:text-lg'>{item.size}</p>
                       <p className='text-xs sm:text-lg text-gray-700'>Quantity : {item.quantity}</p>
                      </div>
                      {/* <p>date : {productData.date}</p> */}
                      </div>
 
 {/* status and track order  */}
                    <div className='flex justify-between md:w-1/2 items-end '>
        {/* status of order  */}
                      <div className='flex items-center h-full gap-2'>
                        <p className='h-2 w-2 bg-green-800 rounded-full'></p>
                        <p className=' text-xs sm:text-lg'>Ready to Ship</p>
                      </div>

        {/* track order button  */}
                      <div className='flex items-center h-full   '>
                      <button className=' p-1 sm:p-2 sm:px-4 border border-gray-300 rounded-lg  text-xs sm:text-lg'>Track order</button>
                      </div>
                     </div>
                     </div>
                     
                    </div>
                    )
        })}
        </div>
    </div>
  )
}

export default Orders