import React, { useContext, useEffect, useState } from 'react'
import ShopContext from '../context/ShopContext';
import Title from '../component/Title';
import { assets } from '../assets/frontend_assets/assets';
import { useNavigate } from 'react-router-dom';
import CartTotal from '../component/CartTotal';


const Cart = () => {
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
  useEffect(() => {
    let total = 0;
    cartData.forEach((item) => {
      const productData = products.find((p) => p._id === item._id);
      if (productData) {
        total += item.quantity * productData.price;
      }
    });
    setTotalAmount(total);
  }, [cartData, products]);
  return (
    <div>
      
            {/* title  */}
        <div className='sm:text-3xl text-xl font-mono '>
             <Title title1="your" title2="cart" />
        </div>

      {/* no [products dialog ] */}
        {cartData == 0 && <div className='md:my-10 mt-4 md:w-1/2 m-auto bg-gray-200 flex flex-col items-center py-10 gap-4'>
          <p className=' text-center text-xl md:text-2xl '>opps! your Cart is Empty</p>
          <p className='text-sm sm:text-base'>Go! browse products now</p>
          <p className='text-lg text-green-800 cursor-pointer' onClick={()=>navigate('/collection')}>Browse Collections</p>
          </div>}

          {/* liseing of produts in cart */}
      <div className='grid grid-cols-1 gap-4 md:w-[80vw]  m-auto'>
      
          {cartData.map((item,index)=>{
            const productData = products.find((prev)=>prev._id === item._id);
            return(
            <div key={index} className='p-4 border border-gray-400 flex gap-2 relative'>
             <img src={productData.images[0]} alt="image" className='h-20 w-20 sm:h-40  sm:w-40 object-contain' />
             <div className='flex flex-col sm:flex-row gap-3 justify-between w-full'>
              <div className='flex flex-col gap-2 md:gap-4'>
              <p className='text-xs sm:text-lg'>{productData.name}</p>
              <div className='flex md:flex-col gap-4 justify-between items-center md:items-start '>
              <p className='text-xs sm:text-lg'>{currency} {productData.price}</p>
              
              <p className='text-xs bg-gray-200 p-1 w-15 text-center sm:text-lg'>{item.size}</p>
              </div>
              </div>
              <div className='flex justify-between md:w-1/2 items-end '>
              <div className='flex items-center h-full'>
               <p className='sm:p-2 px-1 sm:px-3 text-lg  border sm:border-2 border-gray-700 cursor-pointer' onClick={()=>UpdateCartItem(productData._id , item.size  , item.quantity-1)}>-</p>
                <p className='sm:p-2 px-1 py-0.5 sm:px-3  sm:text-lg border sm:border-2 border-gray-700'>{item.quantity}</p>
                 <p className='sm:p-2 px-1 sm:px-3 text-lg  border sm:border-2 border-gray-700 font-extrabold cursor-pointer ' onClick={()=>UpdateCartItem(productData._id , item.size  , item.quantity+1)}>+</p>
                
              </div>
              <div className='flex flex-col sm:justify-end  '>
              {/* <p className='font-semibold text-xl'>Total : </p> */}
              <p className='font-semibold  text-sm sm:text-lg'>= {item.quantity} x {productData.price} = {item.quantity*productData.price}</p>
              </div>
             </div>
             </div>
             
             {/* delete item  */}
             <img src={assets.bin_icon} alt="bin" className='h-5 md:h-6 cursor-pointer absolute right-1 md:right-3 md:top-3 top-1' onClick={()=>UpdateCartItem(productData._id , item.size  , 0)} />
            </div>
            )
})}


{/* cart total  */}
        {totalAmount>0 && <div className='flex justify-end my-6'>
          <div className='  w-full p-4 sm:w-1/2 md:w-1/3  '>
            <CartTotal/>
            <button className='p-2 text-lg rounded-lg m-2 cursor-pointer bg-black text-white px-4 ' onClick={()=>navigate("/placeOrder")}>Proceed to Checkout</button>
          </div>
          
          <div>

          </div>
        </div>}
      </div>
    </div>
  )
}

export default Cart