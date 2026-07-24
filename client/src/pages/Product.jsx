import React, { useContext, useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import ShopContext from '../context/ShopContext';
import { assets } from '../assets/frontend_assets/assets';
import RelatedProduct from '../component/RelatedProduct';


const Product = () => {
  const {productId} = useParams();
  const {products,addItem,currency,} = useContext(ShopContext);
  const [productData, setProductData] = useState();
  const [image, setimage] = useState()
  const [size, setSize] = useState();
  const [items, setItems] = useState(0);

  const fetchProductData =()=>{
    products.map((item)=>{
      if(item._id==productId){
        setProductData(item);
        console.log(item);
        setimage(item.images[0]);
      }
    })
  }

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);


  const handleAddToCart=()=>{
    if(!size){
      alert("plaeses select a size")
      return;
    }
    addItem(productData._id,size);
    setItems(items+1);
   
  }



useEffect(()=>{
  fetchProductData();
   setItems(0);
   setSize('');
},[productId,products]);

  return productData?(
    <div>
    <div className='flex flex-col sm:flex-row gap-10 border-gray-400 border-2 p-4 '>

      {/* image section  */}
      <div className='flex justify-center items-center gap-4  '>
      {/* small all image section  */}
        <div className='flex flex-col w-1/3 justify-between gap-2 sm:gap-5'>
          {productData.images.map((item ,i)=>(
          <div className={` cursor-pointer  ${item===image?"border-2 border-gray-500":""}`} key={i}>
              <img src={item} onClick={()=>setimage(item)} />
          </div>
          ))}
        </div>
        {/* main image  */}
        <div className='w-full h-[80%]'>
          <img src={image} alt="mainImage"  className='h-full w-full object-cover'/>
        </div>
      </div>

      {/* details section  */}
      <div className='p-4 flex flex-col gap-8'>
          <div className='flex flex-col gap-4'>
            <p className='text-base sm:text-2xl'>{productData.name}</p>
          <div className='flex gap-1'>
            <img src={assets.star_icon} alt="star" className='h-5' />
            <img src={assets.star_icon} alt="star" className='h-5' />
            <img src={assets.star_icon} alt="star" className='h-5' />
            <img src={assets.star_icon} alt="star" className='h-5' />
            <img src={assets.star_dull_icon} alt="star" className='h-5' />
            <p className='pl-4 text-gray-500'>(230+)</p>
          </div>
          </div>
          <div className='text-3xl flex gap-2'>
            <p>{currency}</p>
            <p>{productData.price}</p>
          </div>
          <div className='text-gray-500 text-sm sm:text-lg'>
            <p>{productData.description}</p>
          </div>
          {/* sizes  */}
          <div className='flex flex-col gap-2'>
            <p className='text-lg'>Select size</p>
            <div className='flex gap-2'>
              {productData.sizes.map((item,index)=>(
                <div key={index} className=''>
                  <button onClick={()=>setSize(item)} className={`p-4 border transition-all text-base duration-150 text-center  sm:w-20 cursor-pointer ${item==size?"bg-gray-300  border-gray-700":"bg-gray-100 border-white"} `}>{item}</button>
                </div>
              ))}
            </div>
          </div>

          {/* add to cart button  */}
         <div className=' text-2xl text-white flex w-60 gap-3 relative' >
          
           <button onClick={handleAddToCart} className=' cursor-pointer p-4 px-6 bg-black w-60 '>Add to cart</button>
          
         </div>

         <div className='flex flex-col text-gray-500  text-xs sm:text-sm'>
          <p>100% original product</p>
          <p>cash on delivery available on this product</p>
          <p>easy return and exchange upto 7 days</p>
         </div>
      </div>
      
    </div>
      {/* related products  */}
      <RelatedProduct category={productData.category} subCategory={productData.subCategory} />
             

</div>
  ):null
}

export default Product