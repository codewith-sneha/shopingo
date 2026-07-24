import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { AdminContext } from '../context/AdminContext';
import { assets } from '../assets/admin_assets/assets';
import { toast } from 'react-toastify';

const List = () => {
  const [product, setProduct] = useState([]);
  const {backendUrl,token}=useContext(AdminContext);
  const getProducts =async()=>{
    try {
      const response = await axios.get(`${backendUrl}api/product/list`);
      console.log(response);
      if(response.data.success){
        setProduct(response.data.products);
      }
      else{
        console.log(response.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  }

  const HandleDelete = async (id)=>{
    try {
      console.log(id , "token ",token)
      const response  = await axios.delete(backendUrl+'api/product/delete',{
        data:{id},
        headers:{token}
      });
      if(response.data.success){
        toast.success(response.data.message)
      }
      else{
        toast.error(response.data.message)
      }
    } catch (error) {
      toast.error(error.message)
    }
  }
  useEffect(()=>{
    getProducts();
  },[product])
  return (
    <div>
      <div >
        {product && 
        <div className='grid col-1 gap-2 py-10 mr-1 sm:m-auto md:w-[80%] '>
           {product.map((item)=>(
      <div className='flex flex-col sm:flex-row justify-between bg-gray-50 relative w-full gap-1 p-2 min-h-40 m-auto md:px-5  '>
        {/* delete icon  */}
        <p onClick={()=>HandleDelete(item._id)} className='absolute right-1 top-0 text-2xl text-red-800 cursor-pointer'>✖</p>

        {/* name , description and image section  */}
              <div className='flex flex-col justify-between '>
                <img className='w-20 h-20 md:w-30 md:h-30' src={item.images[0]?item.images[0]:assets.upload_area} alt="" />
                <div className='flex flex-col'>
            <p>{item.name}</p>
          <p className='text-sm text-gray-600'>{item.description}</p>
          </div>
              </div>

              {/* middle section  */}
        <div className='flex items-center text-sm'>
            <p className='text-blue-950'>{item.category} | {item.subCategory} </p>
        </div>

<div className='flex items-center text-sm'>
            <p className='text-blue-950'>₹ {item.price} </p>
        </div>

        {/* right section  */}
<div className='flex justify-between flex-col sm:flex-row'>
  
        {/* sizes */}
            <div className='flex gap-2 items-center sm:justify-center'>
            <p>sizes :</p>
            <div className='flex gap-1 items-center'>
              {item.sizes.map((size)=>(
                <p className='p-1 px-3 bg-gray-200'>{size}</p>
              ))}
            </div>
            </div>

              
</div>
      </div>
    ))}
          </div>}
   
      </div>
    </div>
  )
}

export default List